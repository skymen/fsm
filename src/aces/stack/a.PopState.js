export const config = {
  listName: "Pop state",
  displayText: "{my}: Pop state",
  description:
    "Switch back to the most recently pushed state and remove it from the stack. Does nothing if the stack is empty.",
  params: [],
};

export const expose = true;

export default function () {
  if (this.stack.length === 0) return;
  this.SetState(this.stack.pop());
}
