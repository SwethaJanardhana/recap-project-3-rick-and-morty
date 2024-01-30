export function NavigationButtons() {
  const previousButton = document.createElement("button");
  previousButton.classList.add("button", "button--prev");
  previousButton.setAttribute("data-js", "button-prev");
  previousButton.textContent = "previous";

  const nextButton = document.createElement("button");
  nextButton.classList.add("button", "button--next");
  nextButton.setAttribute("data-js", "button-next");
  nextButton.textContent = "next";
  const buttons = {
    previous: previousButton,
    next: nextButton,
  };
  return buttons;
}
