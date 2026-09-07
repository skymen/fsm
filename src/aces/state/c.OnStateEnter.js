import { stateParam } from "../../acesShared.js";

export const config = {
  listName: "On state enter",
  displayText: "{my}: On enter [i]{0}[/i]",
  description: "Triggered after the instance enters a state.",
  isTrigger: true,
  params: [stateParam],
};

export const expose = false;

export default function (state) {
  return this.state === state;
}
