export const config = {
  returnType: "string",
  description: "The state at the given stack index. 0 is the bottom of the stack. Returns an empty string if the index is out of range.",
  params: [
    {
      id: "index",
      name: "Index",
      desc: "Stack index, 0 is the bottom.",
      type: "number",
    },
  ],
};

export const expose = false;

export default function (index) {
  const s = this.stack[index];
  return s === undefined ? "" : s;
}
