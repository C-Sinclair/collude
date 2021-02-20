<script>
  export let open = false;
  export let onClose;
</script>

<dialog {open}>
  <button on:click={onClose}>Close</button>
  <slot />
</dialog>

<style>
  dialog {
    background-color: var(--foreground-colour);
    color: var(--text-colour);
    border-radius: var(--mid-radius);
    border-width: 1px;
    margin-top: 20px;
  }
</style>
