import firebase from "firebase";
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
  set([]);
  if ($board) {
    const { tracks } = $board;
    if (tracks.length > 0) {
      const res = Track.collection.where(
        firebase.firestore.FieldPath.documentId(),
        "in",
        tracks
      );
      const records = await res.get();
      const result = records.docs.map((doc) => {
        const data = doc.data();
        return {
          ...data,
          id: doc.id,
          index: tracks.findIndex((id) => data.id === id),
        };
      });
      set(result);

      res.onSnapshot((snapshot) => {
        const result = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            ...data,
            id: doc.id,
            index: tracks.findIndex((id) => data.id === id),
          };
        });
        set(result);
      });
    }
  }
});

export default {
  subscribe: tracks.subscribe,
};
