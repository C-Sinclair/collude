import * as Tone from "tone";
import { writable } from "svelte/store";

const playing = writable(false);

function play() {
  Tone.getContext()
    .resume()
    .then(() => {
      Tone.Transport.start();
      playing.set(true);
    });
}

function pause() {
  Tone.Transport.stop();
  playing.set(false);
}

export default {
  subscribe: playing.subscribe,
  play,
  pause,
};
