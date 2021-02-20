import { writable } from "svelte/store";
import { Auth } from "../lib/firebase";

function createUserStore() {
  /**
   * @typedef {import('firebase').default.User} User
   * @type {import('svelte/store').Writable<User>}
   */
  const userInfo = writable();

  Auth.onAuthStateChanged((user) => {
    userInfo.set(user);
  });

  async function register(email, password) {
    const res = await Auth.createUserWithEmailAndPassword(email, password);
    userInfo.set(res.user);
    console.log("registered", res);
  }

  async function login(email, password) {
    await Auth.setPersistence();
    const res = await Auth.signInWithEmailAndPassword(email, password);
    userInfo.set(res.user);
    console.log("logged in", res);
    res.user.refreshToken;
  }

  return {
    register,
    login,
    subscribe: userInfo.subscribe,
  };
}

export default createUserStore();
