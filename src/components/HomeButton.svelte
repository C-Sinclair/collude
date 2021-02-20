<script>
  import { push } from "svelte-spa-router";

  const onClick = () => {
    push("/");
  };
</script>

<button on:click={onClick}> Home </button>
