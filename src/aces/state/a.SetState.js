import { stateParam } from "../../acesShared.js";

export const config = {
  listName: "Set state",
  displayText: "{my}: Set state to [i]{0}[/i]",
  description:
    "Switch to a state. Does nothing if it is already the current state.",
  params: [stateParam],
};

export const expose = true;

export default function (next) {
  if (next === this.state) return false;

  this.exitingState = this.state;
  this._trigger("OnStateExit");
  this.exitingState = null;

  this.previousState = this.state;
  this.state = next;
  this.enterTime = this.runtime.gameTime;

  this._trigger("OnStateEnter");
  this._trigger("OnAnyStateChange");
  return true;
}
