<script lang="ts">
import { faCloudDownload } from '@fortawesome/free-solid-svg-icons';
import { Button, FilteredEmptyScreen, NavPage } from '@podman-desktop/ui-svelte';

import InstalledExtensionList from '/@/lib/extensions/InstalledExtensionList.svelte';
import ExtensionIcon from '/@/lib/images/ExtensionIcon.svelte';
import { type CombinedExtensionInfoUI, combinedInstalledExtensions } from '/@/stores/all-installed-extensions';
import { catalogExtensionInfos } from '/@/stores/catalog-extensions';
import { featuredExtensionInfos } from '/@/stores/featuredExtensions';

import type { CatalogExtensionInfoUI } from './catalog-extension-info-ui';
import CatalogExtensionList from './CatalogExtensionList.svelte';
import DevelopmentExtensionList from './dev-mode/DevelopmentExtensionList.svelte';
import { ExtensionsUtils } from './extensions-utils';
import InstallManuallyExtensionModal from './InstallManuallyExtensionModal.svelte';

interface Props {
  searchTerm?: string;
}

let { searchTerm = '' }: Props = $props();

const extensionsUtils = new ExtensionsUtils();

const lowerCaseSearchTerm = $derived(searchTerm.toLowerCase());

const filteredInstalledExtensions: CombinedExtensionInfoUI[] = $derived(
  $combinedInstalledExtensions.filter(extension => {
    return `${extension.displayName} ${extension.description}`.toLowerCase().includes(lowerCaseSearchTerm);
  }),
);

let filteredInstalledItems: number = $derived($combinedInstalledExtensions.length - filteredInstalledExtensions.length);
// combine data from featured extensions and catalog extension
// need to add in the catalog extension a flag to know if extension is featured or not
// and featured extensions need to be displayed first
const enhancedCatalogExtensions: CatalogExtensionInfoUI[] = $derived(
  extensionsUtils.extractCatalogExtensions(
    $catalogExtensionInfos,
    $featuredExtensionInfos,
    $combinedInstalledExtensions,
  ),
);

const filteredCatalogExtensions: CatalogExtensionInfoUI[] = $derived(
  enhancedCatalogExtensions.filter(extension => {
    return `${extension.displayName} ${extension.shortDescription}`.toLowerCase().includes(lowerCaseSearchTerm);
  }),
);

let filteredCatalogItems: number = $derived(enhancedCatalogExtensions.length - filteredCatalogExtensions.length);

function closeModal(): void {
  installManualImageModal = false;
}

let screen: 'installed' | 'catalog' | 'development' = $state('installed');
let installManualImageModal: boolean = $state(false);
</script>

<NavPage bind:searchTerm={searchTerm} title="extensions">
  {#snippet additionalActions()}
    <Button
      on:click={(): void => {
        installManualImageModal = true;
      }}
      icon={faCloudDownload}
      title="Install manually an extension"
      aria-label="Install custom">Install custom...</Button>
  {/snippet}

  {#snippet bottomAdditionalActions()}
    <!-- display filter out items-->
    {#if filteredInstalledItems > 0 && screen === 'installed'}
      <div class="text-sm text-[var(--pd-content-text)]">
        Filtered out {filteredInstalledItems} items of {$combinedInstalledExtensions.length}
      </div>
    {:else if filteredCatalogItems > 0 && screen === 'catalog'}
      <div class="text-sm text-[var(--pd-content-text)]">
        Filtered out {filteredCatalogItems} items of {enhancedCatalogExtensions.length}
      </div>
    {/if}
  {/snippet}

  {#snippet tabs()}
    <Button
      type="tab"
      on:click={(): void => {
        screen = 'installed';
      }}
      selected={screen === 'installed'}>Installed</Button>
    <Button
      type="tab"
      on:click={(): void => {
        screen = 'catalog';
      }}
      selected={screen === 'catalog'}>Catalog</Button>
      <Button
      type="tab"
      on:click={(): void => {
        screen = 'development';
      }}
      selected={screen === 'development'}>Local Extensions</Button>
 {/snippet}

  {#snippet content()}
  <div class="flex min-w-full h-full">
    {#if screen === 'installed'}
      {#if searchTerm && filteredInstalledExtensions.length === 0}
        <FilteredEmptyScreen
          icon={ExtensionIcon}
          kind="extensions"
          searchTerm={searchTerm}
          on:resetFilter={(): string => (searchTerm = '')} />
      {/if}
      <InstalledExtensionList extensionInfos={filteredInstalledExtensions} />
    {:else if screen === 'catalog'}
      {#if searchTerm && filteredCatalogExtensions.length === 0}
        <FilteredEmptyScreen
          icon={ExtensionIcon}
          kind="extensions"
          searchTerm={searchTerm}
          on:resetFilter={(): string => (searchTerm = '')} />
      {/if}
      <CatalogExtensionList showEmptyScreen={!searchTerm} catalogExtensions={filteredCatalogExtensions} />
    {:else if screen === 'development'}
      <DevelopmentExtensionList />
    {/if}
  </div>
  {/snippet}
</NavPage>

{#if installManualImageModal}
  <InstallManuallyExtensionModal
    closeCallback={closeModal} />
{/if}
