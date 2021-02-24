<script>
  import Track from "../../lib/data/track";
  import Step from "./Step.svelte";
  import playing from "../../stores/playing";
  import step from "../../stores/step";

  export let id;
  export let name;
  export let sample;
  export let volume;
  export let sequence;

  /**
   *
   * @param {CustomEvent} e
   */
  async function handleStepChange(e) {
    const { index, value } = e.detail;
    const newValue = sequence.map((s, i) => (i === index ? value : s));
    await Track.update(id, { sequence: newValue });
  }
</script>

<article>
  <header>
    <h6>{name}</h6>
    <p>Vol</p>
    <p>{volume}</p>
  </header>

  <div class="content">
    {#each sequence as on, i}
      <Step
        on:stepOn={handleStepChange}
        {on}
        index={i}
        isPlaying={$playing && $step === i}
      />
    {/each}
  </div>
</article>

<style>
  article {
    display: flex;
    align-items: center;
    max-width: calc(100vw - 40px);
    overflow-y: scroll;
    border: 1px solid var(--border-colour);
    border-radius: var(--small-radius);
  }
  header {
    width: 200px;
  }
  .content {
    display: flex;
  }
</style>
