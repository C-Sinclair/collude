import { derived } from "svelte/store";
import board from "./board";
import Track from "../lib/data/track";

/**
 * @typedef {import("../lib/data/track").Track} Track
 * @typedef {{ index: number } & Track} IndexedTrack
 * @typedef {import("svelte/store").Readable<IndexedTrack[]>} TracksStore
 */

/**
 * @type {TracksStore} tracks
 */
const tracks = derived(board, async ($board, set) => {
  if ($board) {
    const { tracks } = $board;
    const ids = tracks.map(({ id }) => id);
    const res = Track.collection.where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      ids
    );
    const records = await res.get();
    const result = records.docs.map((doc) => {
      const data = doc.data();
      return {
        ...data,
        index: tracks.find(({ id }) => data.id === id).index,
      };
    });
    set(result);

    res.onSnapshot((snapshot) => {
      const result = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          ...data,
          index: tracks.find(({ id }) => data.id === id).index,
        };
      });
      set(result);
    });
  }
});

export default {
  subscribe: tracks.subscribe,
};
