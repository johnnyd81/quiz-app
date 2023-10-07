const correctAnswers = ["C", "B", "B", "A", "C"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  let userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];

  //check if the user answers are correct
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 20;
    }
  });

  //show result at the top of the page
  //by using scrollTo(0, 0) the x and the y axis are 0 meaning the position is right at the top of the page
  scrollTo(0, 0); //represents the x and y axis of the page
  result.querySelector("span").textContent = `${score}%`;
  result.classList.remove("d-none");

  //animate the score
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (score === output) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
