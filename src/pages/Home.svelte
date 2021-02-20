<script>
  import { link } from "svelte-spa-router";
  import CreateBoardModal from "../components/CreateBoardModal.svelte";
  import BoardList from "../components/BoardList.svelte";
  import user from "../stores/user";

  let showCreate;

  const createBoard = () => {
    showCreate = true;
  };
</script>

<main>
  <h1>Home</h1>

  {#if $user}
    <BoardList />
  {:else}
    <a use:link href="/login">Time to log in?</a>
  {/if}

  <button on:click={createBoard} title="Add a new board">+</button>
</main>

<CreateBoardModal open={showCreate} />

<style>
  button {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
  }
</style>
