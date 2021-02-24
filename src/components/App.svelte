<script>
  import Router from "svelte-spa-router";
  import Login from "../pages/Login.svelte";
  import Register from "../pages/Register.svelte";
  import Home from "../pages/Home.svelte";
  import Board from "../pages/Board.svelte";
  import NotFound from "../pages/NotFound.svelte";
  import Avatar from "./layout/Avatar.svelte";
  import Sidebar from "./layout/Sidebar.svelte";

  const routes = {
    "/": Home,
    "/board/:id": Board,
    "/login": Login,
    "/register": Register,
    "*": NotFound,
  };
</script>

<main>
  <Sidebar />
  <Avatar />
  <Router {routes} />
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-template-rows: 50px 1fr 70px;
    grid-template-areas:
      "sidebar title"
      "sidebar body"
      "footer footer";
  }
</style>
