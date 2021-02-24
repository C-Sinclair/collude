import firebase from "firebase";
import { Firestore } from "../firebase";
import { upload } from "../files";
import Player from "../player";
import * as Tone from "tone";

/**
 * @typedef {Object} Asset
 * @property {string} Asset.id
 * @property {string} Asset.url
 * @property {string} Asset.filename
 * @property {Date} Asset.created
 */

const collection = Firestore.collection("assets");

/**
 *
 * @param {File} file
 * @returns {string} -- id of the new record
 */
async function create(file) {
  const url = await upload(file);
  const res = await collection.add({
    filename: file.name,
    url,
    created: new Date(),
  });
  return res.id;
}

/**
 * @returns {Promise<Asset[]>} -- list of all assets
 */
async function fetch() {
  const res = await collection.get();
  const assets = res.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return assets;
}

/**
 *
 * @param {string[]} ids
 * @returns {Promise<Asset[]>}
 */
async function getMany(ids) {
  if (ids && ids.length > 0) {
    const res = await collection
      .where(firebase.firestore.FieldPath.documentId(), "in", ids)
      .get();
    const assets = res.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return assets;
  }
  return [];
}

/**
 *
 * @param {string} id
 * @returns {Promise<Asset>}
 */
async function get(id) {
  const asset = await collection.doc(id).get();
  const data = asset.data();
  return {
    ...data,
    id: asset.id,
  };
}

/**
 * @template {Asset | Asset[]} A
 * @param {A} asset
 * @returns {Promise<Tone.Player | Tone.Player[]>}
 */
async function preload(asset) {
  if (Array.isArray(asset)) {
    return asset.map(Player.create);
  }
  return Player.create(asset);
}

export default { create, fetch, get, getMany, preload };
