import { push } from "svelte-spa-router";
import { Firestore } from "./firebase";
import Asset from "./asset";

/**
 * @typedef {Object} Board
 * @property {string} Board.id
 * @property {string} Board.name
 * @property {Date} Board.created
 * @property {string[]} Board.assets
 */

const collection = Firestore.collection("boards");

/**
 *
 * @param {Partial<Board>} arg
 */
async function create({ name }) {
  const res = await collection.add({
    name,
    assets: [],
    created: new Date(),
  });
  push(`/board/${res.id}`);
}

/**
 * @returns {Promise<Board[]>} -- list of boards
 */
async function fetch() {
  const res = await collection.get();
  const boards = res.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return boards;
}

/**
 *
 * @param {string} id
 * @returns {Promise<Board>}
 */
async function get(id) {
  const board = await collection.doc(id).get();
  const data = board.data();
  return {
    ...data,
    id: board.id,
  };
}

/**
 * @param {Board} board
 */
async function update(id, board) {
  await collection.doc(id).update(board);
}

/**
 * Add a single asset to a board
 * @param {Board} board -- board to add to
 * @param {string} asset -- the id relation to the asset collection
 */
async function addAsset(board, assetId) {
  const currentAssets = board.assets || [];
  await update(board.id, {
    assets: [...currentAssets, assetId],
  });
}

/**
 * @param {Board} board
 * @returns {Promise<import("./asset").Asset[]>}
 */
async function getAssets(board) {
  console.log(`fetching assets for ${board.id}`);
  const assets = await Asset.getMany(board.assets);
  console.log(`fetched assets`, assets);
  await Asset.preload(assets);
  return assets;
}

export default { create, fetch, get, update, addAsset, getAssets };
