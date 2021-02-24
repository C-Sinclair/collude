<script>
  import board from "../../stores/board";
  import Board from "../../lib/data/board";
  import Modal from "./Modal.svelte";

  export let open = false;
  export let onClose;

  let bpm = $board?.bpm || "";

  const submit = ({ id }) => async (e) => {
    e.preventDefault();
    await Board.setBpm($board, bpm);
    onClose();
  };
</script>

<Modal {open} {onClose}>
  <form on:submit={submit($board)}>
    <label for="name">Name</label>
    <input id="name" bind:value={bpm} />
    <button type="submit">Update</button>
  </form>
</Modal>
