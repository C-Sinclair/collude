<script>
  import Track from "./Track.svelte";
  import tracks from "../../stores/track";
  import players from "../../stores/players";
  import step from "../../stores/step";
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import * as Tone from "tone";

  onMount(() => {
    Tone.Transport.scheduleRepeat((time) => {
      const p = get(players);
      const s = get(step);
      if (p) {
        const current = p[s];
        current.forEach(
          (buffer) => buffer && buffer.start && buffer.start(time)
        );
      }
      step.next();
    }, "16n");
  });
</script>

<section>
  {#each $tracks as track}
    <Track {...track} />
  {/each}
</section>
