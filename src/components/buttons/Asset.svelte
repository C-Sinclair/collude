<script>
  import AssetsDrawer from "../layout/AssetsDrawer.svelte";
  import Cassette from "../icons/Cassette.svelte";

  let assetDrawerOpen;
</script>

<button on:click>
  <Cassette />
</button>

{#if assetDrawerOpen}
  <AssetsDrawer />
{/if}

<style>
  button {
    outline: none;
    border: unset;
    background-color: unset;
    cursor: pointer;
  }
</style>
