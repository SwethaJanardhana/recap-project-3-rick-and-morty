export function Pagination() {
  const spanElement = document.createElement("span");
  spanElement.classList.add("navigation__pagination");
  spanElement.setAttribute("data-js", "pagination");
  spanElement.textContent = "1/1";
  return spanElement;
}
