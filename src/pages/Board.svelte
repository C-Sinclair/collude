<script>
  import { onMount } from "svelte";
  import board from "../stores/board";
  import RecordButton from "../components/buttons/Record.svelte";
  import UploadButton from "../components/buttons/Upload.svelte";
  import EditNameModal from "../components/modals/EditName.svelte";
  import AssetsDrawer from "../components/AssetsDrawer.svelte";

  export let params = {};

  let showEditName = false;

  onMount(() => {
    board.select(params.id);
  });

  const editName = () => {
    showEditName = true;
  };
</script>

<h1 on:click={editName}>{$board ? $board.name : "Board"}</h1>

<AssetsDrawer />

<footer>
  <RecordButton />

  <div>Timeline</div>

  <UploadButton />
</footer>

<EditNameModal
  open={showEditName}
  onClose={() => {
    showEditName = false;
  }}
/>

<style>
  h1 {
    text-align: center;
    margin: 0;
    padding: 0;
    cursor: text;
  }
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: calc(100vw - 20px);
    height: 50px;
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    background: var(--foreground-colour);
    padding: 10px;
  }
</style>
