<script>
  import { push } from "svelte-spa-router";
  import UserStore from "../stores/user";

  let email,
    password,
    passwordConfirm,
    error = "";

  const submit = async (e) => {
    try {
      e.preventDefault();
      error = "";
      if (!email) {
        throw new Error("No email");
      }
      if (!password) {
        throw new Error("No password");
      }
      if (password !== passwordConfirm) {
        throw new Error("Password don't match");
      }
      await UserStore.register(email, password);
      push("/");
    } catch (error) {
      error = error.message;
    }
  };
</script>

<h1>Register</h1>

<div class="content">
  <form on:submit={submit}>
    <div>
      {#if error}
        <p>{error}</p>
      {/if}
    </div>
    <label for="email">Email</label>
    <input id="email" bind:value={email} />
    <label for="password">Password</label>
    <input id="password" type="password" bind:value={password} />
    <label for="password-repeat">Confirm Password</label>
    <input id="password-repeat" type="password" bind:value={passwordConfirm} />
    <button type="submit">Register Account</button>
  </form>
</div>

<style>
  h1 {
    grid-area: title;
  }
  .content {
    grid-area: body;
  }
</style>
