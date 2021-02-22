import featuresModal from "../template/modal-features.hbs";
import noFrostItem from "./features-modal-component/no-frost";
import washersItem from "./features-modal-component/washers";
import tradeItem from "./features-modal-component/trade";
import tankItem from "./features-modal-component/tank";

featuresModal();

const refs = {
  backdrop: document.querySelector(".backdrop-features-main"),
  body: document.querySelector("body"),
  item: document.querySelector(".features-item"),
};

function createModal() {
  refs.item.addEventListener("click", handlerOpenModal);
}

function handlerOpenModal(e) {
  if (e.target.dataset.id === "2") {
    refs.backdrop.innerHTML = "";
    refs.backdrop.classList.add("is-open");
    refs.backdrop.insertAdjacentHTML("beforeend", featuresModal(noFrostItem));

    const backdropWrapper = document.querySelector(".modal-features-wrapper");
    backdropWrapper.classList.add("frost");
    setTimeout(() => {
      backdropWrapper.classList.add("is-open");
    }, 0.1);
    refs.body.classList.add("modal-open");
  } else if (e.target.dataset.id === "1") {
    refs.backdrop.innerHTML = "";
    refs.backdrop.classList.add("is-open");
    refs.backdrop.insertAdjacentHTML("beforeend", featuresModal(washersItem));

    const backdropWrapper = document.querySelector(".modal-features-wrapper");
    backdropWrapper.classList.add("washers");
    setTimeout(() => {
      backdropWrapper.classList.add("is-open");
    }, 0.1);
    refs.body.classList.add("modal-open");
  } else if (e.target.dataset.id === "3") {
    refs.backdrop.innerHTML = "";
    refs.backdrop.classList.add("is-open");
    refs.backdrop.insertAdjacentHTML("beforeend", featuresModal(tradeItem));

    const backdropWrapper = document.querySelector(".modal-features-wrapper");
    backdropWrapper.classList.add("trade-in");
    setTimeout(() => {
      backdropWrapper.classList.add("is-open");
    }, 0.1);
    refs.body.classList.add("modal-open");
  } else if (e.target.dataset.id === "4") {
    refs.backdrop.innerHTML = "";
    refs.backdrop.classList.add("is-open");
    refs.backdrop.insertAdjacentHTML("beforeend", featuresModal(tankItem));

    const backdropWrapper = document.querySelector(".modal-features-wrapper");
    backdropWrapper.classList.add("tank");
    setTimeout(() => {
      backdropWrapper.classList.add("is-open");
    }, 0.1);
    refs.body.classList.add("modal-open");
  }
}
if (
  location.pathname === "/index.html" ||
  location.pathname === "/" ||
  location.pathname === "/www.first-master.ru/index.html" ||
  location.pathname === "/www.first-master.ru/"
) {
  createModal();
  closeModalForKeypress();
  closeModalOnClickBtn();
  closeModalForClickBackdrop();
}

function closeModalOnClickBtn() {
  refs.backdrop.addEventListener("click", handlerClickBtn);
}
function closeModalForKeypress() {
  window.addEventListener("keydown", handlerKeydown);
}
function closeModalForClickBackdrop() {
  refs.backdrop.addEventListener("click", handlerClickForBackdrop);
}

function handlerKeydown(e) {
  if (e.code === "Escape") {
    refs.backdrop.innerHTML = "";
    refs.body.classList.remove("modal-open");
  }
}

function handlerClickBtn(e) {
  if (e.target.nodeName === "I" || e.target.nodeName === "BUTTON") {
    refs.backdrop.innerHTML = "";
    refs.body.classList.remove("modal-open");
  }
}

function handlerClickForBackdrop(e) {
  if (e.target.classList.contains("modal-features-backdrop")) {
    refs.backdrop.innerHTML = "";
    refs.body.classList.remove("modal-open");
  }
}
