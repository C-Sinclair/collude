import { derived } from "svelte/store";
import { Player } from "tone";
import Asset from "../lib/data/asset";
import { fixedArray } from "../lib/util/array";
import tracks from "./track";

/**
 * 16 bar array of arrays of players
 * on each bar the array of players can be played
 * @type {import('svelte/store').Readable<(?Player)[][]>}
 */
const players = derived(tracks, async ($tracks, set) => {
  const promises = $tracks.map(async (track) => {
    const buffer = await Asset.preload({ id: track.sample });
    return track.sequence.map((on) => (on ? buffer : null));
  });
  const res = await Promise.all(promises);
  const fixed = fixedArray.map((_, i) => res.map((seq) => seq[i]));
  set(fixed);
});

export default {
  subscribe: players.subscribe,
};
