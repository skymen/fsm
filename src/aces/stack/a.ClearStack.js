export const config = {
  listName: "Clear stack",
  displayText: "{my}: Clear state stack",
  description: "Remove every state from the stack. The current state is not changed.",
  params: [],
};

export const expose = true;

export default function () {
  this.stack.length = 0;
}
