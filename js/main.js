const toggle = document.getElementById("calcToggle");
const panel = document.getElementById("calculator");

const car = document.getElementById("car");
const days = document.getElementById("days");
const delivery = document.getElementById("delivery");
const currency = document.getElementById("currency");
const price = document.getElementById("price");
const currencyLabel = document.getElementById("currencyLabel");

toggle.onclick = () => {
  panel.classList.toggle("open");
};

function calc() {
  let total =
    car.value * days.value +
    Number(delivery.value);

  if (currency.value === "AED") {
    total *= 3.67;
    currencyLabel.textContent = "AED";
  } else {
    currencyLabel.textContent = "$";
  }

  price.textContent = Math.round(total);
}

[car, days, delivery, currency].forEach(el =>
  el.addEventListener("input", calc)
);

calc();




const animatedItems = document.querySelectorAll(
  ".animate-left, .animate-right"
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.3 });

animatedItems.forEach(item => observer.observe(item));



document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const answer = item.querySelector('.faq-answer');

    item.classList.toggle('active');

    if (item.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = null;
    }
  });
});