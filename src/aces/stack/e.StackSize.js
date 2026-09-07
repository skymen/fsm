export const config = {
  returnType: "number",
  description: "Number of states on the stack.",
  params: [],
};

export const expose = false;

export default function () {
  return this.stack.length;
}
