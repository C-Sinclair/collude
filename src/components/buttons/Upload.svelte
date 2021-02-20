<script>
  import { upload } from "../../lib/files";
  import board from "../../stores/board";
  import UploadIcon from "../icons/Upload.svelte";

  let fileInput;

  const onFileSelected = async (e) => {
    const file = e.target.files[0];
    console.log({ file });
    const url = await upload(file);
    console.log({ url });
    board.addAsset(url);
  };
</script>

<button
  on:click={() => {
    fileInput.click();
  }}
  on:change={(e) => onFileSelected(e)}
>
  <UploadIcon />
</button>

<input type="file" bind:this={fileInput} />
