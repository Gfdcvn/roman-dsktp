<script lang="ts">
import { onDestroy, onMount } from 'svelte';
import type { Unsubscriber } from 'svelte/store';

import type { ProviderContainerConnectionInfo, ProviderInfo } from '/@api/provider-info';

let providerUnsubscribe: Unsubscriber;

import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import type { V1NamespaceList } from '@kubernetes/client-node/dist/api';
import type { OpenDialogOptions } from '@podman-desktop/api';
import { Button, Checkbox, Dropdown, ErrorMessage, Input } from '@podman-desktop/ui-svelte';
import Fa from 'svelte-fa';

import ContainerConnectionDropdown from '/@/lib/forms/ContainerConnectionDropdown.svelte';
import { handleNavigation } from '/@/navigation';
import { NavigationPage } from '/@api/navigation-page';

import { providerInfos } from '../../stores/providers';
import MonacoEditor from '../editor/MonacoEditor.svelte';
import NoContainerEngineEmptyScreen from '../image/NoContainerEngineEmptyScreen.svelte';
import KubePlayIcon from '../kube/KubePlayIcon.svelte';
import EngineFormPage from '../ui/EngineFormPage.svelte';
import FileInput from '../ui/FileInput.svelte';
import WarningMessage from '../ui/WarningMessage.svelte';

let runStarted = false;
let runFinished = false;
let runError = '';
let kubeBuild: boolean = false;
let runWarning = '';
let kubernetesYamlFilePath: string | undefined = undefined;
let hasInvalidFields = true;

$: hasInvalidFields = kubernetesYamlFilePath === undefined;

let defaultContextName: string | undefined;
let currentNamespace: string | undefined;
let allNamespaces: V1NamespaceList;

let playKubeResultRaw: string;
let playKubeResultJSON: unknown;
let playKubeResult: { Pods?: unknown[] } | undefined = undefined;

let userChoice: 'podman' | 'kubernetes' = 'podman';

let providers: ProviderInfo[] = [];
$: providerConnections = providers
  .map(provider => provider.containerConnections)
  .flat()
  // keep only podman providers as it is not supported by docker
  .filter(providerContainerConnection => providerContainerConnection.type === 'podman')
  .filter(providerContainerConnection => providerContainerConnection.status === 'started');
let selectedProviderConnection: ProviderContainerConnectionInfo | undefined = undefined;
$: selectedProviderConnection = providerConnections.length > 0 ? providerConnections[0] : undefined;
let selectedProvider: ProviderContainerConnectionInfo | undefined = undefined;
$: selectedProvider = !selectedProvider && selectedProviderConnection ? selectedProviderConnection : selectedProvider;

const kubeFileDialogOptions: OpenDialogOptions = {
  title: 'Select a .yaml file to play',
  filters: [
    {
      name: 'YAML files',
      extensions: ['yaml', 'yml'],
    },
  ],
};

function removeEmptyOrNull(obj: object): object {
  Object.keys(obj).forEach(k => {
    const val = obj[k as keyof typeof obj];
    (val && typeof val === 'object' && removeEmptyOrNull(val)) ||
      (!val && val !== undefined && delete obj[k as keyof typeof obj]);
  });
  return obj;
}

async function playKubeFile(): Promise<void> {
  runStarted = true;
  runFinished = false;
  runError = '';
  if (kubernetesYamlFilePath && selectedProvider) {
    // depending on the user choice, do podman or kubernetes
    if (userChoice === 'podman') {
      try {
        const result = await window.playKube(kubernetesYamlFilePath, selectedProvider, {
          build: kubeBuild,
        });

        // remove the null values from the result
        playKubeResultRaw = JSON.stringify(removeEmptyOrNull(result), undefined, 2);
        playKubeResultJSON = JSON.parse(playKubeResultRaw);

        // If there are container errors, that means that it was *able* to create the container
        // but if failed to start. We will add this to the "warning" section as we were able to create the
        // We add this with comma deliminated errors
        if (playKubeResultJSON && typeof playKubeResultJSON === 'object') {
          playKubeResult = {};
          if (
            'Pods' in playKubeResultJSON &&
            playKubeResultJSON.Pods !== undefined &&
            Array.isArray(playKubeResultJSON.Pods) &&
            playKubeResultJSON.Pods.length > 0
          ) {
            playKubeResult.Pods = playKubeResultJSON.Pods;
            // Filter out the pods that have container errors, but check to see that container errors exists first
            const containerErrors = playKubeResultJSON.Pods.filter(
              (pod: unknown) =>
                pod &&
                typeof pod === 'object' &&
                'ContainerErrors' in pod &&
                Array.isArray(pod.ContainerErrors) &&
                pod.ContainerErrors.length > 0,
            );

            // For each Pod that has container errors, we will add the container errors to the warning message
            if (containerErrors.length > 0) {
              runWarning = `The following pods were created but failed to start: ${containerErrors
                .map((pod: unknown) =>
                  pod && typeof pod === 'object' && 'ContainerErrors' in pod && Array.isArray(pod.ContainerErrors)
                    ? pod.ContainerErrors.join(', ')
                    : '',
                )
                .join(', ')}`;
            }
          }
        }

        runFinished = true;
      } catch (error) {
        runError = String(error);
        console.error('error playing kube file', error);
      }
    } else if (userChoice === 'kubernetes') {
      if (!defaultContextName) {
        runError = 'No default context found';
        return;
      }
      if (!currentNamespace) {
        runError = 'No current namespace found';
        return;
      }
      try {
        await window.kubernetesCreateResourcesFromFile(defaultContextName, kubernetesYamlFilePath, currentNamespace);
        runFinished = true;
      } catch (error) {
        runError = String(error);
        console.error('error playing kube file', error);
      }
    }
  }
  runStarted = false;
}

onMount(async () => {
  providerUnsubscribe = providerInfos.subscribe(value => {
    providers = value;
  });

  // grab default context
  defaultContextName = await window.kubernetesGetCurrentContextName();

  // grab current namespace
  currentNamespace = await window.kubernetesGetCurrentNamespace();

  // check that the variable is set to a value, otherwise set to default namespace
  currentNamespace ??= 'default';

  // grab all the namespaces (will be useful to provide a drop-down to select the namespace)
  try {
    allNamespaces = await window.kubernetesListNamespaces();
  } catch (error) {
    console.debug('Not able to list all namespaces, probably a permission error', error);
  }
});

onDestroy(() => {
  if (providerUnsubscribe) {
    providerUnsubscribe();
  }
});

function goBackToPodsPage(): void {
  // redirect to the pods page
  handleNavigation({
    page: NavigationPage.PODMAN_PODS,
  });
}
</script>

{#if providerConnections.length === 0}
  <NoContainerEngineEmptyScreen />
{/if}

{#if providerConnections.length > 0}
  <EngineFormPage title="Create pods from a Kubernetes YAML file" inProgress={runStarted && !runFinished}>
    {#snippet icon()}
    <KubePlayIcon size="30px" />
    {/snippet}

    {#snippet content()}
    <div class="space-y-6">
      <div hidden={runStarted}>
        <label for="containerFilePath" class="block mb-2 text-base font-bold text-[var(--pd-content-card-header-text)]"
          >Kubernetes YAML file</label>
        <FileInput
          name="containerFilePath"
          id="containerFilePath"
          readonly
          required
          bind:value={kubernetesYamlFilePath}
          placeholder="Select a .yaml file to play"
          options={kubeFileDialogOptions}
          class="w-full p-2" />
      </div>

      <Checkbox class="mx-1 my-auto" title="Enable build" bind:checked={kubeBuild} >
        <div>Enable build</div>
      </Checkbox>

      <div class="text-base font-bold text-[var(--pd-content-card-header-text)]">Runtime</div>

      <div class="flex flex-col">
        <button
          hidden={providerConnections.length === 0}
          class:border-2={defaultContextName}
          class="rounded-md p-5 cursor-pointer bg-[var(--pd-content-card-inset-bg)]"
          aria-label="Podman Container Engine Runtime"
          aria-pressed={userChoice === 'podman' ? 'true' : 'false'}
          class:border-[var(--pd-content-card-border-selected)]={userChoice === 'podman'}
          class:border-[var(--pd-content-card-border)]={userChoice !== 'podman'}
          on:click={(): void => {
            userChoice = 'podman';
          }}>
          <div class="flex flex-row align-middle items-center">
            <div
              class="text-2xl"
              class:text-[var(--pd-content-card-border-selected)]={userChoice === 'podman'}
              class:text-[var(--pd-content-card-border)]={userChoice !== 'podman'}>
              <Fa icon={faCircleCheck} />
            </div>
            <div
              class="pl-2"
              class:text-[var(--pd-content-card-text)]={userChoice === 'podman'}
              class:text-[var(--pd-input-field-disabled-text)]={userChoice !== 'podman'}>
              Podman container engine
            </div>
          </div>
          <div hidden={runStarted}>
            {#if providerConnections.length > 1}
              <label
                for="providerConnectionName"
                class="block mb-2 font-medium"
                class:text-[var(--pd-content-card-header-text)]={userChoice === 'podman'}
                class:text-[var(--pd-input-field-disabled-text)]={userChoice !== 'podman'}
                >Container Engine</label>
              <ContainerConnectionDropdown
                id="providerChoice"
                name="providerChoice"
                bind:value={selectedProvider}
                disabled={userChoice === 'kubernetes'}
                connections={providerConnections}/>
            {/if}
            {#if providerConnections.length === 1 && selectedProviderConnection}
              <input type="hidden" name="providerChoice" readonly bind:value={selectedProviderConnection.name} />
            {/if}
          </div>
        </button>
        <button
          hidden={!defaultContextName}
          class="border-2 rounded-md p-5 cursor-pointer bg-[var(--pd-content-card-inset-bg)]"
          aria-label="Kubernetes Cluster Runtime"
          aria-pressed={userChoice === 'kubernetes' ? 'true' : 'false'}
          class:border-[var(--pd-content-card-border-selected)]={userChoice === 'kubernetes'}
          class:border-[var(--pd-content-card-border)]={userChoice !== 'kubernetes'}
          on:click={(): void => {
            userChoice = 'kubernetes';
          }}>
          <div class="flex flex-row align-middle items-center">
            <div
              class="text-2xl"
              class:text-[var(--pd-content-card-border-selected)]={userChoice === 'kubernetes'}
              class:text-[var(--pd-content-card-border)]={userChoice !== 'kubernetes'}>
              <Fa icon={faCircleCheck} />
            </div>
            <div
              class="pl-2"
              class:text-[var(--pd-content-card-text)]={userChoice === 'kubernetes'}
              class:text-[var(--pd-input-field-disabled-text)]={userChoice !== 'kubernetes'}>
              Kubernetes cluster
            </div>
          </div>

          {#if defaultContextName}
            <div class="pt-2">
              <label
                for="contextToUse"
                class="block mb-1 text-sm font-bold"
                class:text-[var(--pd-content-card-header-text)]={userChoice === 'kubernetes'}
                class:text-[var(--pd-input-field-disabled-text)]={userChoice !== 'kubernetes'}
                >Kubernetes Context:</label>
              <Input
                disabled={userChoice === 'podman'}
                bind:value={defaultContextName}
                aria-label="Default Kubernetes Context"
                name="defaultContextName"
                id="defaultContextName"
                readonly
                required />
            </div>
          {/if}

          {#if allNamespaces}
            <div class="pt-2">
              <label
                for="namespaceToUse"
                class="block mb-1 text-sm font-medium"
                class:text-[var(--pd-content-card-header-text)]={userChoice === 'kubernetes'}
                class:text-[var(--pd-input-field-disabled-text)]={userChoice !== 'kubernetes'}
                >Kubernetes namespace:</label>
              <Dropdown
                disabled={userChoice === 'podman'}
                ariaLabel="Kubernetes Namespace"
                name="namespaceChoice"
                bind:value={currentNamespace}
                options={allNamespaces.items.map(namespace => ({
                  label: namespace.metadata?.name ?? '',
                  value: namespace.metadata?.name ?? '',
                }))}>
              </Dropdown>
            </div>
          {/if}
        </button>
      </div>

      {#if !runFinished}
        <Button
          on:click={playKubeFile}
          disabled={hasInvalidFields || runStarted}
          class="w-full"
          inProgress={runStarted}
          icon={KubePlayIcon}>
          Play
        </Button>
      {/if}
      {#if runStarted}
        <div class="text-[var(--pd-content-card-text)] text-sm">
          Please wait during the Play Kube and do not change screen. This process may take a few minutes to complete...
        </div>
      {/if}

      {#if runWarning}
        <WarningMessage class="text-sm" error={runWarning} />
      {/if}

      {#if runError}
        <ErrorMessage class="text-sm" error={runError} />
      {/if}

      {#if playKubeResult}
        <!-- Output area similar to DeployPodToKube.svelte -->
        <div class="bg-[var(--pd--content-card-bg)] p-5 my-4 text-[var(--pd-content-card-text)]">
          <div class="flex flex-row items-center">
            <div>
              {#if playKubeResult.Pods && playKubeResult.Pods.length > 1}
                Created pods:
              {:else}
                Created pod:
              {/if}
            </div>
          </div>

          <div class="h-[100px] pt-2">
            <MonacoEditor content={playKubeResultRaw} language="json" />
          </div>
        </div>
      {/if}

      {#if runFinished}
        <Button on:click={goBackToPodsPage} class="w-full">Done</Button>
      {/if}
    </div>
    {/snippet}
  </EngineFormPage>
{/if}
