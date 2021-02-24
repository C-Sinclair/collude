<script>
  import Track from "./Track.svelte";

  const tracks = [
    {
      name: "Track 1",
      sample: "ID1",
    },
  ];
</script>

<section>
  {#each tracks as { name, sample }}
    <Track {name} {sample} />
  {/each}
</section>
