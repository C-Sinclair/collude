import { derived, get, writable } from "svelte/store";
import Board from "../lib/board";
import { Firestore } from "../lib/firebase";
import Player from "../lib/player";

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
    Player.create(data.assets);
    doc.onSnapshot((snapshot) => {
      const data = snapshot.data();
      set({ ...data, id: $selected });
      Player.create(data.assets);
    });
  }
});

/**
 * Add a single asset to the board
 * @param {string} asset -- the id relation to the asset collection
 */
async function addAssetToCurrent(assetId) {
  const id = get(selectedBoard);
  const board = await Board.get(id);
  await Board.addAsset(board, assetId);
}

export default {
  select,
  addAssetToCurrent,
  subscribe: board.subscribe,
};
