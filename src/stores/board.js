import { derived, writable } from "svelte/store";
import { Firestore } from "../lib/firebase";
import AssetCache from "../lib/assets";

/**
 * @typedef {import("../lib/board").Board} Board
 * @typedef {import('svelte/store').Readable<Board>} ReadableBoard
 */

const collection = Firestore.collection("boards");

/**
 * @type {import('svelte/store').Writable<string>}
 */
const selectedBoard = writable();

/**
 * @param {string} id
 */
function select(id) {
  selectedBoard.set(id);
}

/**
 * @type {ReadableBoard}
 */
const board = derived(selectedBoard, async ($selected, set) => {
  if ($selected) {
    const doc = collection.doc($selected);
    const record = await doc.get();
    const data = record.data();
    set({ ...data, id: $selected });
    AssetCache.create(data.assets);
    doc.onSnapshot((snapshot) => {
      console.log({ snapshot });
      const data = snapshot.data();
      set({ ...data, id: $selected });
      AssetCache.create(data.assets);
    });
  }
});

/**
 * @param {Board} board
 */
async function update(board) {
  console.log("updating board", board);
  await collection.doc(board.id).update(board);
}

/**
 * Add a single asset url to the board
 * @param {string} url
 */
async function addAsset(url) {
  const doc = collection.doc(board.id);
  const board = await doc.get();
  await update({
    assets: [...board.data().assets.url],
  });
}

export default {
  select,
  update,
  addAsset,
  subscribe: board.subscribe,
};
