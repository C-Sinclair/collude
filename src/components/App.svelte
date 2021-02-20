<script>
  import { onMount } from "svelte";
  import Router from "svelte-spa-router";

  import Login from "../pages/Login.svelte";
  import Register from "../pages/Register.svelte";
  import Home from "../pages/Home.svelte";
  import Board from "../pages/Board.svelte";
  import NotFound from "../pages/NotFound.svelte";

  import Avatar from "../components/Avatar.svelte";
  import HomeButton from "../components/HomeButton.svelte";

  const routes = {
    "/": Home,
    "/board/:id": Board,
    "/login": Login,
    "/register": Register,
    "*": NotFound,
  };
</script>

<HomeButton />
<Avatar />
<Router {routes} />
