/**
 * This store is purely for local usage
 * Users will playback separately
 */
import { writable } from "svelte/store";

/**
 * @type {'stopped' | 'paused' | 'playing'}
 */
let initialState = "stopped";

function createPlaybackStore() {
  const playState = writable(initialState);
  const play = () => {
    playState.set("playing");
  };
  const pause = () => {
    playState.set("paused");
  };
  const stop = () => {
    playState.set("stopped");
  };
  return {
    subscribe: playState.subscribe,
    play,
    pause,
    stop,
  };
}

export default createPlaybackStore();
