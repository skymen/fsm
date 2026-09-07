import { stateParam } from "../../acesShared.js";

export const config = {
  listName: "Set state",
  displayText: "{my}: Set state to [i]{0}[/i]",
  description: "Switch to a state. Does nothing if it is already the current state.",
  params: [stateParam],
};

export const expose = true;

export default function (state) {
  this.changeState(state);
}
