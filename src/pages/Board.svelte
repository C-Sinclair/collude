<script>
  import board from "../stores/board";
  import track from "../stores/track";
  import EditNameModal from "../components/modals/EditName.svelte";
  import BpmModal from "../components/modals/Bpm.svelte";
  import Sequencer from "../components/sequencer/Sequencer.svelte";
  import Footer from "../components/layout/Footer.svelte";

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

<div class="body">
  {#if $board}
    <label for="bpm">BPM</label>
    <h6 on:click={editBpm}>{$board.bpm}</h6>
  {/if}

  {#if $track.length > 0}
    <Sequencer />
  {/if}
</div>

<Footer />

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
    grid-area: title;
    text-align: center;
    margin: 0;
    padding: 0;
    cursor: text;
  }
  .body {
    grid-area: body;
    width: calc(100vw - 50px);
  }
  footer {
    grid-area: footer;
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    background: var(--foreground-colour);
    padding: 10px;
    width: calc(100vw - 20px);
  }
</style>
