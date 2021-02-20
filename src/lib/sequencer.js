import { Transport } from "tone";
import AssetCache from "./assets";

export function createSeq(board) {
  Transport.scheduleRepeat((time) => {
    AssetCache.get(board).forEach((asset) => {
      asset.start(time);
    });
  }, "16n");
  Transport.bpm.value = board.bpm || 100;
  Transport.loop = true;
  Transport.start();
}
