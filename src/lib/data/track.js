import { Firestore } from "../firebase";

/**
 * 1 = on, 0 = off
 * Could extended in the future for double notes etc
 * @typedef {?number} Step
 *
 * @typedef {Object} Track
 * @property {string} Track.id
 * @property {number} Track.index
 * @property {string} Track.name
 * @property {string} Track.sample -- asset id, or something else in the future
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
