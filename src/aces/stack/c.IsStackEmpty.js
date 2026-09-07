export const config = {
  listName: "Is stack empty",
  displayText: "{my}: Is state stack empty",
  description: "True if no states have been pushed.",
  isInvertible: true,
  params: [],
};

export const expose = true;

export default function () {
  return this.stack.length === 0;
}
