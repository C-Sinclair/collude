<script>
  import { create } from "../lib/board";

  export let open = false;

  let name = "";

  const submit = async (e) => {
    e.preventDefault();
    if (name.length === 0) {
      return; // error
    }
    await create({ name });
  };
</script>

<dialog {open}>
  <h1>Create Board</h1>
  <form on:submit={submit}>
    <label for="name">Name</label>
    <input id="name" bind:value={name} />
    <button type="submit">Create</button>
  </form>
</dialog>
