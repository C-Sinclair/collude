<script>
  import HomeButton from "../buttons/Home.svelte";
  import AssetButton from "../buttons/Asset.svelte";
</script>

<nav>
  <ul>
    <li>
      <HomeButton />
    </li>
    <li>
      <AssetButton />
    </li>
  </ul>
</nav>

<style>
  nav {
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 10px;
    border-right: 1px solid var(--border-colour);
    background-color: var(--foreground-colour);
    grid-area: sidebar;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 10px;
  }
</style>
