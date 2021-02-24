import { Firestore } from "../firebasee";

/**
 * @typedef {?number} Step
 *
 * @typedef {Object} Track
 * @property {string} Track.id
 * @property {number} Track.index
 * @property {string} Track.asset
 * @property {number} Track.volume
 * @property {Step[]} Track.sequence
 */

const collection = Firestore.collection("tracks");

/**
 * @param {string} id
 * @param {Track} track
 */
async function update(id, track) {
  await collection.doc(id).update(track);
}

export default {
  update,
  collection,
};
