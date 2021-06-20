<script>
  import InlineSvg from './InlineSvg.svelte';
  export let name;
</script>

<button title={name} class="text-footer-green hover:text-white">
  <InlineSvg src={`/images/icon-${name}.svg`} />
</button>
<!-- <img class="text-white" src={`/images/icon-${name}.svg`} alt={name}/> -->
<!-- <object class="w-5 fill-current text-white" type="image/svg+xml" data={`/images/icon-${name}.svg`} title={name}></object> -->
<style>
</style>