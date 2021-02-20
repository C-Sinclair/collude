import { writable } from "svelte/store";
import { Firestore } from "../lib/firebase";
import AssetCache from "../lib/assets";

const collection = Firestore.collection("boards");

/**
 *
 * @param {string} id
 */
async function createBoardStore(id) {
  const store = writable({});
  const doc = collection.doc(id);
  // set initial data
  const data = await doc.get();
  store.set(data);
  // subscribe to data changes
  const sub$ = doc.onSnapshot(
    (snapshot) => {
      // snapshot.docChanges().forEach((change) => {
      //   // Need to check that data is the full data or just partial
      //   const data = change.doc.data();
      //   if (change.type === "added") {
      //     console.log("Added: ", data);
      //     store.set(data);
      //     AssetCache.create(data);
      //   }
      //   if (change.type === "modified") {
      //     console.log("Modified: ", data);
      //     store.set(data);
      //   }
      //   if (change.type === "removed") {
      //     console.log("Removed: ", data);
      //     // error state ? should'nt be on a board when it is removed
      //     store.set(data);
      //   }
      // });

      // or maybe just a full overwrite ?
      const data = snapshot.data();
      store.set(data);
      AssetCache.create(data);
    },
    (error) => {
      console.log({ error });
    }
  );
  const update = (board) => {
    store.set(board);
    doc.update(board);
  };
  return {
    subscribe: store.subscribe,
    update,
  };
}

export default createBoardStore;
