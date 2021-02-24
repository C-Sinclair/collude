import { writable } from "svelte/store";

const step = writable(0);

function next() {
  step.update((current) => (current > 14 ? 0 : current + 1));
}

export default {
  subscribe: step.subscribe,
  next,
};
