<script>
  import { push } from "svelte-spa-router";
  import Home from "../icons/Home.svelte";

  const onClick = () => {
    push("/");
  };
</script>

<button on:click={onClick}>
  <Home />
</button>

<style>
  button {
    outline: none;
    border: unset;
    background-color: unset;
    cursor: pointer;
  }
</style>
