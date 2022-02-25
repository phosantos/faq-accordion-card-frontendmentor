function initAccordeon() {
  const questions = document.querySelectorAll(".faq dt");

  function showAnswer() {
    questions.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        item.nextElementSibling.classList.remove("active");
      }
    });

    this.classList.add("active");
    this.nextElementSibling.classList.add("active");
  }

  questions.forEach((item) => {
    item.addEventListener("click", showAnswer);
  });
}

initAccordeon();
