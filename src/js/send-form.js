const submitButton = document.getElementById("submit_form");
const form = document.getElementById("email_form");
form.addEventListener("submit", function (e) {
  setTimeout(function () {
    submitButton.value = "Sending...";
    submitButton.disabled = true;
  }, 1);
});
