<script>
  import Asset from "../../lib/data/asset";
  import board from "../../stores/board";
  import UploadIcon from "../icons/Upload.svelte";

  let fileInput;

  const onFileSelected = async (e) => {
    const file = e.target.files[0];
    const id = await Asset.create(file);
    board.addAssetToCurrent(id);
  };
</script>

<button
  on:click={() => {
    fileInput.click();
  }}
>
  <UploadIcon />
</button>

<input type="file" bind:this={fileInput} on:change={onFileSelected} />

<style>
  input {
    display: none;
  }
</style>
