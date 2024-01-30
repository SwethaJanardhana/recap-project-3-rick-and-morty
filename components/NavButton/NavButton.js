export function NavigationButtons(prop) {
  const button = document.createElement("button");
  button.classList.add("button");
  button.classList.add(`button--${prop.eventType}`);
  button.addEventListener("click", prop.onClick);
  if (prop.eventType === "prev") {
    button.textContent = "previous";
  } else if (prop.eventType === "next") {
    button.textContent = "next";
  }
  return button;
}
