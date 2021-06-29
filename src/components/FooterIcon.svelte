<script>
  import InlineSvg from './InlineSvg.svelte';
  export let name;
</script>

<button title={name} class="text-footer-green hover:text-white">
  <InlineSvg src={`/images/icon-${name}.svg`} />
</button>
<style>
</style>