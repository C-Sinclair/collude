import App from "./App.svelte";
import * as firebase from "./lib/firebase.js";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;

if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}
