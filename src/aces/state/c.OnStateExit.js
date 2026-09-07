import { stateParam } from "../../acesShared.js";

export const config = {
  listName: "On state exit",
  displayText: "{my}: On exit [i]{0}[/i]",
  description:
    "Triggered just before the instance leaves a state. CurrentState still returns the state being left.",
  isTrigger: true,
  params: [stateParam],
};

export const expose = true;

export default function (state) {
  return this.exitingState === state;
}
