<script>
  import board from "../stores/board";
  import playing from "../stores/playing";
  import RecordButton from "../components/buttons/Record.svelte";
  import UploadButton from "../components/buttons/Upload.svelte";
  import EditNameModal from "../components/modals/EditName.svelte";
  import BpmModal from "../components/modals/Bpm.svelte";
  import AssetsDrawer from "../components/AssetsDrawer.svelte";
  import Sequencer from "../components/sequencer/Sequencer.svelte";

  export let params = {};
  let showEditName = false;
  let showBpm = false;

  $: params, board.select(params.id);

  const editName = () => {
    showEditName = true;
  };
  const editBpm = () => {
    showBpm = true;
  };
</script>

<h1 on:click={editName}>{$board ? $board.name : "Board"}</h1>

{#if $board}
  <label for="bpm">BPM</label>
  <h6 on:click={editBpm}>{$board.bpm}</h6>
{/if}

<AssetsDrawer />

<Sequencer />

<button on:click={$playing ? playing.pause : playing.play}>
  {$playing ? "Pause" : "Play"}
</button>

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
<BpmModal
  open={showBpm}
  onClose={() => {
    showBpm = false;
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
