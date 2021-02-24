<script>
  import playing from "../../stores/playing";
  import Play from "../icons/Play.svelte";
  import Pause from "../icons/Pause.svelte";
</script>

<button on:click={$playing ? playing.pause : playing.play}>
  {#if $playing}
    <Pause />
  {:else}
    <Play />
  {/if}
</button>

<style>
  button {
    border-radius: var(--large-radius);
    width: 40px;
    height: 40px;
    text-align: center;
  }
</style>
