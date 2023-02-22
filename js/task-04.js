const plus = document.querySelector("[data-action='increment']");
const minus = document.querySelector("[data-action='decrement']");
const span = document.querySelector("#value");


let counterValue = 0;
const increment = () => {
  counterValue += 1;

 span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

 span.textContent = counterValue;
};
plus.addEventListener("click", increment);
minus.addEventListener("click", decrement);
