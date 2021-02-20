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
    position: fixed;
    top: 10px;
    left: 10px;
    outline: none;
    border: unset;
    background-color: unset;
    cursor: crosshair;
  }
</style>
