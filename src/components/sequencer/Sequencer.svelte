<script>
  import Track from "./Track.svelte";
  import tracks from "../../stores/track";

  $: ordered = $tracks.sort((a, b) => a.index - b.index);
</script>

<section>
  {#each ordered as track}
    <Track {...track} />
  {/each}
</section>
