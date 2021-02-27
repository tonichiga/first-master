import "./styles.css";
import "./sass/main.scss";
import "./js/modal.js";
import "./js/menu.js";
import "./js/header-btn.js";
import "./js/send-form.js";
import "./js/create-cards.js";
import "./js/open-modal-features";

if (location.pathname !== "/contacts.html") {
  setTimeout(() => {
    const modal = document.querySelector(".backdrop");
    modal.classList.remove("hidden");
  }, 500);
}
