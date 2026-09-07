export const config = {
  returnType: "string",
  description: "The state before the current one. Empty if there was none.",
  params: [],
};

export const expose = false;

export default function () {
  return this.previousState;
}
