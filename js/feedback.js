var feedbackLink = document.querySelector(".feedback-button");
var feedbackPopup = document.querySelector(".feedback-popup");
var feedbackClose = feedbackPopup.querySelector(".close-tab");
var feedbackName = feedbackPopup.querySelector(".feedback-name");
var feedbackForm = feedbackPopup.querySelector(".feedback-form");
var feedbackEmail = feedbackPopup.querySelector(".feedback-email");
var feedbackLetter = feedbackPopup.querySelector(".feedback-letter");
var feedbackBackground = document.querySelector(".container-main");


feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  feedbackName.focus();
  feedbackBackground.classList.add("container-disabled");
});

feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
    feedbackBackground.classList.remove("container-disabled");
  });

feedbackForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
});

feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackLetter.value) {
      evt.preventDefault();
    } else {
        localStorage.setItem("name", feedbackName.value);
      }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-show");
      }
    }
  });