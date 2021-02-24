<script>
  import assets from "../../stores/assets";
  import Play from "../icons/Play.svelte";
  import Player from "../../lib/player";

  const onPlay = (asset) => () => {
    const player = Player.get(asset);
    player.start();
  };
</script>

{#if $assets}
  <section>
    <h4>Assets</h4>
    <ul>
      {#each $assets as asset}
        <li>
          <button on:click={onPlay(asset)}>
            <Play />
          </button>
          {asset.filename}
        </li>
      {/each}
    </ul>
  </section>
{/if}

<style>
  section {
    background-color: var(--foreground-colour);
    max-width: 300px;
    position: fixed;
    top: 100px;
    left: 40px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
</style>
