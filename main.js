document.addEventListener("DOMContentLoaded", function () {
  var questions = document.querySelectorAll(".question");
  var answers = document.querySelectorAll(".answers");
  var incomeSound = document.querySelector("#income_sound");
  var outcomeSound = document.querySelector("#outcome_sound");
  var nextBtn = document.querySelector(".next");
  var firstScreen = document.querySelector(".screen");
  var chatScreen = document.querySelector("#chat_screen");
  var footer = document.querySelector("#footer_wrap");
  var answerButtons = document.querySelectorAll(".answer-btn");
  chatScreen.style.display = "none";
  chatScreen.style.opacity = "0";

  nextBtn.addEventListener("click", toggleScreen);

  function toggleScreen() {
    firstScreen.style.transition = ".3s";
    firstScreen.style.opacity = "0";
    footer.style.display = "none";
    setTimeout(function () {
      firstScreen.style.display = "none";
      chatScreen.style.display = "block";
      if (chatScreen.style.display.toString() === "block") {
        // app
        chat();
        // app
      }
      setTimeout(function () {
        chatScreen.style.opacity = "1";
      }, 1);
    }, 400);
  }

  function chat() {
    for (var i = 0; i < questions.length; i++) {
      questions[i].style.transition = ".3s";
      questions[i].style.opacity = "0";
      questions[i].style.transform = "translateY(100px)";
    }

    for (var i = 0; i < answers.length; i++) {
      answers[i].style.transition = ".3s";
      answers[i].style.opacity = "0";
      answers[i].style.transform = "translateY(100px)";
      answers[0].addEventListener("click", function () {
        showQuestion(1);
        selectAnswer(0);
      });
      answers[1].addEventListener("click", function () {
        showQuestion(2);
        selectAnswer(1);
      });
      answers[2].addEventListener("click", function () {
        showQuestion(3);
        selectAnswer(2);
      });
    }
    answerButtons.forEach(function (elem) {
      elem.addEventListener("click", function () {
        elem.classList.add("active-btn");
        elem.parentElement.childNodes.forEach(function (elem) {
          if (!elem.disabled) {
            playOutcomeSound();
          }
          elem.disabled = true;
        });
      });
    });

    function showQuestion(number) {
      setTimeout(function () {
        // if (number > 0) {
        playIncomeSound();
        // }
        questions[number].style.display = "inline-block";
        answers[number].style.display = "flex";
        setTimeout(function () {
          questions[number].style.opacity = "1";
          questions[number].style.transform = "translateY(0)";

          setTimeout(function () {
            answers[number].style.opacity = "1";
            answers[number].style.transform = "translateY(0)";
          }, 600);
          document.querySelector("#anchor").scrollIntoView();
        }, 50);
      }, 400);
    }
    showQuestion(0);
    function selectAnswer(number) {
      // answer[number - 1].classList.add("active-btn");
      // answers[number].style.opacity = "0";
      // answers[number].style.transform = "translateY(100)";
      // setTimeout(function () {
      //   answers[number].style.display = "none";
      // }, 300);
    }

    function playIncomeSound() {
      incomeSound.muted = false;
      incomeSound.play();
    }
    function playOutcomeSound() {
      outcomeSound.muted = false;
      outcomeSound.play();
    }
  }
});
