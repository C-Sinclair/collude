import { Transport } from "tone";
import Player from "./player";

// TODO - this is old
export function createSeq(board) {
  Transport.scheduleRepeat((time) => {
    Player.get(board).forEach((asset) => {
      asset.start(time);
    });
  }, "16n");
  Transport.bpm.value = board.bpm || 100;
  Transport.loop = true;
  Transport.start();
}
