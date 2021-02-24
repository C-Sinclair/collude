import * as Tone from "tone";
import { derived, get, writable } from "svelte/store";
import Board from "../lib/data/board";
import Player from "../lib/player";

/**
 * @typedef {import("../lib/data/board").Board} Board
 * @typedef {import('svelte/store').Readable<Board>} ReadableBoard
 */

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
    const doc = Board.collection.doc($selected);
    const record = await doc.get();
    const data = record.data();
    set({ ...data, id: $selected });
    Player.create(data.assets);
    if (data.bpm) {
      Tone.Transport.bpm.value = data.bpm;
    }

    doc.onSnapshot((snapshot) => {
      const data = snapshot.data();
      set({ ...data, id: $selected });
      Player.create(data.assets);
      if (data.bpm) {
        Tone.Transport.bpm.value = data.bpm;
      }
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
