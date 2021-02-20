import { derived } from "svelte/store";
import board from "./board";
import Board from "../lib/board";

/**
 * @type {import("svelte/store").Readable<import("../lib/asset").Asset[]>}
 */
const boardAssets = derived(board, async ($board, set) => {
  if ($board) {
    const assets = await Board.getAssets($board);
    set(assets);
  }
});

export default {
  subscribe: boardAssets.subscribe,
};
