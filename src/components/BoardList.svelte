<script>
  import { fetch } from "../lib/board";
</script>

{#await fetch()}
  <p>Loading boards</p>
{:then boards}
  {#each boards as board}
    <li>{board.name}</li>
  {/each}
{/await}

<style>
</style>
