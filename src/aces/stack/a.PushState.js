import { stateParam } from "../../acesShared.js";

export const config = {
  listName: "Push state",
  displayText: "{my}: Push state [i]{0}[/i]",
  description: "Remember the current state on the stack, then switch to the given state.",
  params: [stateParam],
};

export const expose = true;

export default function (state) {
  this.stack.push(this.state);
  this.changeState(state);
}
