export const config = {
  returnType: "number",
  description: "Seconds of game time spent in the current state.",
  params: [],
};

export const expose = true;

export default function () {
  return this.runtime.gameTime - this.enterTime;
}
