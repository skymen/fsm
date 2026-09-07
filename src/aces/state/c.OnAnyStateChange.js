export const config = {
  listName: "On any state change",
  displayText: "{my}: On any state change",
  description: "Triggered after the instance enters any state.",
  isTrigger: true,
  params: [],
};

export const expose = false;

export default function () {
  return true;
}
