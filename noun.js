window.addEventListener("load", addInteractiveBehaviors);

function addInteractiveBehaviors() {
  let footnotes = document.querySelectorAll(".ield div");
  let blues = document.querySelectorAll(".blue span");
  let thirdThird = document.querySelector(".third-third");

  blues.forEach((el) => {
    el.addEventListener("click", function () {
      let currentClass = el.classList[0];
      let selected = document.querySelector(`.ield .${currentClass}`);

      footnotes.forEach((foot) => {
        foot.classList.add("ridden");
      });

      selected.classList.remove("ridden");

      tieldSubscript.innerHTML = selected.innerHTML;
      tieldSubscript.classList.remove("hidden");
    });
  });

  const buttons = document.querySelectorAll(".button>li");
  for (let button of buttons) {
    const currentClass = button.classList[0];
    const currentButton = document.querySelector(`.button .${currentClass}`);
    currentButton.addEventListener("click", () => {
      const currentField = document.querySelector(`.field .${currentClass}`);
      currentField.classList.toggle("hidden");
    });
  }
}
