const correctAnswers = ["C", "B", "B", "A", "C", "B", "C", "A", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  //an array holds all the responses from the user
  //each question has three choices that has the same name attribute. This ensures that only one option can be chosen
  let userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
    form.q6.value,
    form.q7.value,
    form.q8.value,
    form.q9.value,
    form.q10.value,
  ];

  //loop over the userAnswers to see if they match the correctAnswers
  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer == correctAnswers[index]) {
      score += 10;
    }
  });

  //display the result at the top of the page
  scroll(0, 0); //the arguments represent the x and y axis
  result.querySelector("span").textContent = `${score}%`;
  result.classList.remove("d-none");

  //animate the result
  let scoreOutput = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${scoreOutput}%`;
    if (score == scoreOutput) {
      clearInterval(timer);
    } else {
      scoreOutput++;
    }
  }, 10);
});
