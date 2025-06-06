<script lang="ts">
import '@xterm/xterm/css/xterm.css';

import { EmptyScreen } from '@podman-desktop/ui-svelte';
import { FitAddon } from '@xterm/addon-fit';
import { Terminal } from '@xterm/xterm';
import { onDestroy, onMount } from 'svelte';

import type { ProviderContainerConnectionInfo, ProviderKubernetesConnectionInfo } from '/@api/provider-info';

import { TerminalSettings } from '../../../../main/src/plugin/terminal-settings';
import { getTerminalTheme } from '../../../../main/src/plugin/terminal-theme';
import NoLogIcon from '../ui/NoLogIcon.svelte';
import { writeToTerminal } from './Util';

export let providerInternalId: string | undefined = undefined;
export let connectionInfo: ProviderContainerConnectionInfo | ProviderKubernetesConnectionInfo | undefined = undefined;
export let setNoLogs: () => void;
export let noLog: boolean;
let logsTerminal: Terminal;

$: noLog = !!noLog;
let noLogs = !!noLog;

// Log
let logsXtermDiv: HTMLDivElement;

// Terminal resize
let resizeObserver: ResizeObserver;
let termFit: FitAddon;

async function refreshTerminal(): Promise<void> {
  // missing element, return
  if (!logsXtermDiv) {
    console.log('missing xterm div, exiting...');
    return;
  }

  termFit = new FitAddon();
  logsTerminal.loadAddon(termFit);

  logsTerminal.open(logsXtermDiv);

  // disable cursor
  logsTerminal.write('\x1b[?25l');

  termFit.fit();
}

onMount(async () => {
  // grab font size
  const fontSize = await window.getConfigurationValue<number>(
    TerminalSettings.SectionName + '.' + TerminalSettings.FontSize,
  );
  const lineHeight = await window.getConfigurationValue<number>(
    TerminalSettings.SectionName + '.' + TerminalSettings.LineHeight,
  );
  logsTerminal = new Terminal({
    fontSize,
    lineHeight,
    disableStdin: true,
    theme: getTerminalTheme(),
    convertEol: true,
  });
  // Refresh the terminal on initial load
  await refreshTerminal();

  logsTerminal.onLineFeed(() => {
    setNoLogs();
    noLogs = false;
  });
  // Resize the terminal each time we change the div size
  resizeObserver = new ResizeObserver(() => {
    termFit?.fit();
  });

  // Observe the terminal div
  resizeObserver.observe(logsXtermDiv);
  const logHandler = (newContent: unknown[], colorPrefix: string): void => {
    writeToTerminal(logsTerminal, newContent, colorPrefix);
  };
  if (providerInternalId) {
    await window.startReceiveLogs(
      providerInternalId,
      (data: unknown[]) => logHandler(data, ''),
      (data: unknown[]) => logHandler(data, ''),
      (data: unknown[]) => logHandler(data, ''),
      connectionInfo,
    );
  }
});

onDestroy(() => {
  // Cleanup the observer on destroy
  resizeObserver?.unobserve(logsXtermDiv);
});
</script>

<EmptyScreen
  icon={NoLogIcon}
  title="No Log"
  message="Log output"
  hidden={noLogs === false}
  class="bg-[var(--pd-details-bg)]" />

<div
  aria-label="terminal"
  class="min-w-full flex flex-col bg-[var(--pd-terminal-background)] p-[5px] pr-0"
  class:invisible={noLogs === true}
  class:h-0={noLogs === true}
  class:h-full={noLogs === false}
  bind:this={logsXtermDiv}>
</div>
