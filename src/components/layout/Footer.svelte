<script>
  import { get } from "svelte/store";
  import playing from "../../stores/playing";
  import PlayPause from "../buttons/PlayPause.svelte";
  import RecordButton from "../buttons/Record.svelte";
  import UploadButton from "../buttons/Upload.svelte";

  function onKey(e) {
    if (e.code === "Space") {
      if (get(playing)) {
        playing.pause();
      } else {
        playing.play();
      }
    }
  }
</script>

<svelte:body on:keydown={onKey} />

<footer>
  <RecordButton />

  <PlayPause />

  <UploadButton />
</footer>

<style>
  footer {
    grid-area: footer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--foreground-colour);
    padding: 10px;
    width: calc(100vw - 20px);
  }
</style>
