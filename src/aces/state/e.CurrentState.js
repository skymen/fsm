export const config = {
  returnType: "string",
  description: "The current state.",
  params: [],
};

export const expose = false;

export default function () {
  return this.state;
}
