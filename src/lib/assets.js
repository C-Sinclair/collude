import { Player } from "tone";

const assets = new Map();

async function create(urls = []) {
  const promises = urls.filter((url) => !assets.has(url)).map(createPlayer);
  await Promise.all(promises);
}

async function createPlayer(url) {
  return new Promise((resolve) => {
    const buffer = new Player(url, () => {
      assets.set(url, buffer);
      resolve(buffer);
    }).toDestination();
  });
}

function get(url) {
  return url;
}

export default { create, get };
