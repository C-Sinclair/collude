<script>
  import { push } from "svelte-spa-router";
  import user from "../../stores/user";

  const onClick = () => {
    push("/login");
  };

  const title = (user) =>
    user ? (user.displayName || user.email).charAt(0) : "?";
</script>

<div on:click={onClick}>
  {#if $user && $user.avatar}
    <img src={$user.avatar} alt={title($user)} />
  {:else}
    <span>{title($user)}</span>
  {/if}
</div>

<style>
  div {
    position: fixed;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blueviolet;
    cursor: pointer;
  }
</style>
