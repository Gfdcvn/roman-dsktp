<script lang="ts">
import type { V1ServiceSpec } from '@kubernetes/client-node';

import Cell from '/@/lib/details/DetailsCell.svelte';
import Title from '/@/lib/details/DetailsTitle.svelte';
import KubePorts from '/@/lib/kube/details/KubePortsList.svelte';
import { WorkloadKind } from '/@api/kubernetes-port-forward-model';

interface Props {
  artifact?: V1ServiceSpec;
  serviceName?: string;
  namespace?: string;
}
let { artifact, serviceName, namespace }: Props = $props();
</script>

{#if artifact}
  <tr>
    <Title>Details</Title>
  </tr>
  <tr>
    <Cell>Type</Cell>
    <Cell>{artifact?.type}</Cell>
  </tr>
  <tr>
    <Cell>Cluster IP</Cell>
    <Cell>{artifact?.clusterIP}</Cell>
  </tr>
  {#if artifact?.externalIPs}
    <tr>
      <Cell>External IPs</Cell>
      <Cell>{artifact?.externalIPs?.join(', ') || ''}</Cell>
    </tr>
  {/if}
  <tr>
    <Cell>Session Affinity</Cell>
    <Cell>{artifact?.sessionAffinity}</Cell>
  </tr>
  <KubePorts namespace={namespace} resourceName={serviceName} kind={WorkloadKind.SERVICE} ports={artifact.ports?.map((port) => ({
    name: port.name,
    value: port.port,
    protocol: port.protocol,
    displayValue: `${port.name ? port.name + ':' : ''}${port.port}${port.nodePort ? ':' + port.nodePort : ''}/${port.protocol}`,
  }))}/>
  {#if artifact.selector}
    <tr>
      <Cell>Selectors</Cell>
      <Cell>
        {#each Object.entries(artifact.selector) as [key, value] (key)}
          <div>{key}: {value}</div>
        {/each}
      </Cell>
    </tr>
  {/if}
{/if}
