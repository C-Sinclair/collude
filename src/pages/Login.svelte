<script>
  import { push, link } from "svelte-spa-router";
  import UserStore from "../stores/user";

  let email,
    password,
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
      await UserStore.login(email, password);
      push("/");
    } catch (error) {
      error = error.message;
    }
  };
</script>

<main>
  <h1>Login</h1>

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
    <button type="submit">Login</button>
  </form>

  <a use:link href={"/register"}>Or Register...</a>
</main>
