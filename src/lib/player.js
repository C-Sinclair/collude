import { Player } from "tone";

/**
 * @typedef {import("./data/asset").Asset} Asset
 * @type {Map<string, Player>}
 */
const assets = new Map();

/**
 * Creates a player from an asset
 * @param {Asset} asset
 * @returns {Promise<Player>}
 */
async function create({ id, url }) {
  if (assets.has(id)) {
    return Promise.resolve(assets.get(id));
  }
  return new Promise((resolve) => {
    const buffer = new Player(url, () => {
      assets.set(id, buffer);
      resolve(buffer);
    }).toDestination();
  });
}

/**
 *
 * @param {Asset} asset
 */
function get({ id }) {
  return assets.get(id);
}

export default { create, get };
