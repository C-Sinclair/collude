<script>
  import { push } from "svelte-spa-router";
  import { fetch } from "../lib/board";

  const onBoardClick = (board) => () => {
    console.log(board);
    push(`/board/${board.id}`);
  };
</script>

{#await fetch()}
  <p>Loading boards</p>
{:then boards}
  <ul>
    {#each boards as board}
      <li on:click={onBoardClick(board)}>{board.name}</li>
    {/each}
  </ul>
{/await}

<style>
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    cursor: pointer;
    border: 1px solid var(--border-colour);
    padding: 20px;
    border-radius: var(--mid-radius);
  }
</style>
