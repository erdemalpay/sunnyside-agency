<script>
  import { createEventDispatcher } from 'svelte';

  export let src;
  
  let svgString = '';
  const dispatch = createEventDispatcher();
  loadSvg();

  async function loadSvg() {
    const svg = await window.fetch(src);
    svgString = await svg.text();

    dispatch('loaded');
  }
</script>

{#if svgString}
  <span class="svg-wrapper w-full">
    {@html svgString}
  </span>
{/if}

<style>
  .svg-wrapper {
    display: inline-flex;
  }

  :global(.svg-wrapper > svg) {
    vertical-align: middle;
  }
</style>
