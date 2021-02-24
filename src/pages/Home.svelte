<script>
  import { link } from "svelte-spa-router";
  import CreateBoardModal from "../components/modals/CreateBoard.svelte";
  import BoardList from "../components/lists/BoardList.svelte";
  import user from "../stores/user";

  let showCreate;

  const createBoard = () => {
    showCreate = true;
  };
</script>

<div class="content">
  <h1>Collude.</h1>

  {#if $user}
    <BoardList />
  {:else}
    <a use:link href="/login">Time to log in?</a>
  {/if}
</div>

<button on:click={createBoard} title="Add a new board">+</button>

<CreateBoardModal open={showCreate} />

<style>
  .content {
    padding: 4em;
  }
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
