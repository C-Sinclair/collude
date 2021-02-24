<script>
  import Track from "../../lib/data/track";
  import Step from "./Step.svelte";

  export let id;
  export let name;
  export let sample;
  export let volume;
  export let sequence;

  const LENGTH = 8;

  $: steps = Array.from({ length: LENGTH }).map((_, i) => ({
    on: sequence[i] > 0,
  }));

  /**
   *
   * @param {CustomEvent} e
   */
  async function handleStepChange(e) {
    const { index, value } = e.detail;
    const newValue = steps.map((s, i) => (i === index ? value : s.on));
    console.log({ newValue });
    await Track.update(id, { sequence: newValue });
  }
</script>

<article>
  <header>
    <h6>{name}</h6>
    <p>{sample}</p>
    <p>Vol</p>
    <p>{volume}</p>
  </header>

  <div class="content">
    {#each steps as step, i}
      <Step on:stepOn={handleStepChange} on={step.on} index={i} />
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
