<script>
  import { onMount } from "svelte";
  import createBoardStore from "../stores/board";

  export let params = {};
  let board;

  onMount(async () => {
    board = await createBoardStore(params.id);
    createSeq(board);
  });
</script>

<main>
  <h1>Board</h1>
  <span>{params.id}</span>

  {board.toString()}
</main>
