"use strict";

var contacts_link = document.querySelector(".contacts .button");
var popup = document.querySelector(".feedback");
var close_btn = document.querySelector(".feedback-close");

contacts_link.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.add("feedback-show");
});

close_btn.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("feedback-show");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      event.preventDefault();
      if (popup.classList.contains("feedback-show")) {
        popup.classList.remove("feedback-show");
      }
    }
  });
