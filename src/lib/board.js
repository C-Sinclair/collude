import { push } from "svelte-spa-router";
import { Firestore } from "./firebase";

/**
 * @typedef {Object} Board
 * @property {string} Board.id
 * @property {string} Board.name
 * @property {Date} Board.created
 * @property {string[]} Board.assets
 */

const collection = Firestore.collection("boards");

async function create({ name }) {
  const res = await collection.add({
    name,
    assets: [],
    created: new Date(),
  });
  console.log("created board", res);
  push(`/board/${res.id}`);
}

/**
 * @returns {Board[]} -- list of boards
 */
async function fetch() {
  console.log("fetching");
  const res = await collection.get();
  const boards = res.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log("fetched", boards);
  return boards;
}

export { create, fetch };
