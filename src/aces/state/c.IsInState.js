import { stateParam } from "../../acesShared.js";

export const config = {
  listName: "Is in state",
  displayText: "{my}: Is in state [i]{0}[/i]",
  description: "True if the current state matches.",
  isInvertible: true,
  params: [stateParam],
};

export const expose = true;

export default function (state) {
  return this.state === state;
}
