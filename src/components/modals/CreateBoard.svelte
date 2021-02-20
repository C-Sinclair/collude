<script>
  import Board from "../../lib/board";
  import Modal from "./Modal.svelte";

  export let open = false;
  export let onClose;

  let name = "";

  const submit = async (e) => {
    e.preventDefault();
    if (name.length === 0) {
      return; // error
    }
    await Board.create({ name });
  };
</script>

<Modal {open} {onClose}>
  <h1>Create Board</h1>
  <form on:submit={submit}>
    <label for="name">Name</label>
    <input id="name" bind:value={name} />
    <button type="submit">Create</button>
  </form>
</Modal>
