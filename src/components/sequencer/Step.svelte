<script>
  import { createEventDispatcher } from "svelte";

  export let index;
  export let on;

  const dispatch = createEventDispatcher();

  const toggleOn = () => {
    console.log("dispatching");
    dispatch("stepOn", { index });
  };
</script>

<div class:on on:click={toggleOn}>
  {index + 1}
</div>

<style>
  div {
    border: 1px solid var(--border-colour);
    border-radius: var(--small-radius);
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: var(--pad-colour);
    margin-left: 5px;
    margin-right: 5px;
    padding: 5px;
  }
  div:hover {
    background-color: var(--hover-pad-colour);
  }
  .on {
    background-color: var(--on-pad-colour);
  }
</style>
