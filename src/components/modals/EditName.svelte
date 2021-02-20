<script>
  import board from "../../stores/board";
  import Modal from "./Modal.svelte";

  export let open = false;
  export let onClose;

  let name = $board?.name || "";

  const submit = ({ id }) => async (e) => {
    e.preventDefault();
    if (name.length === 0) {
      return; // error
    }
    await board.update(id, { name });
    onClose();
  };
</script>

<Modal {open} {onClose}>
  <form on:submit={submit($board)}>
    <label for="name">Name</label>
    <input id="name" bind:value={name} />
    <button type="submit">Update</button>
  </form>
</Modal>
