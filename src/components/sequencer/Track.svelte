<script>
  import Step from "./Step.svelte";

  export let name;
  export let sample;

  const steps = Array.from({ length: 8 }).map(() => ({ on: false }));

  function handleStepOn(e) {
    console.log(e);
  }
</script>

<article>
  <header>
    <h6>{name}</h6>
    <p>{sample}</p>
  </header>

  <div class="content">
    {#each steps as step, i}
      <Step on:stepOn={handleStepOn} on={step.on} index={i} />
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
