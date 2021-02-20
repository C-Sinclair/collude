import { push } from "svelte-spa-router";
import { Firestore } from "./firebase";

const collection = Firestore.collection("boards");

async function create({ name }) {
  const res = await collection.add({
    name,
    assets: [],
  });
  console.log("created board", res);
  push(`/board/${res.id}`);
}

/**
 * @returns {{ name: string, assets: string[] }[]} -- list of boards
 */
async function fetch() {
  console.log("fetching");
  const res = await collection.get();
  console.log("fetched", res);
  return res.docs();
}

export { create, fetch };
