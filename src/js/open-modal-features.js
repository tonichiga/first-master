import featuresModal from "../template/modal-features.hbs";
import noFrostItem from "./features-modal-component/no-frost";
import washersItem from "./features-modal-component/washers";
import tradeItem from "./features-modal-component/trade";
import tankItem from "./features-modal-component/tank";

featuresModal();

const refs = {
  backdrop: document.querySelector(".backdrop-features-main"),
  // modal: document.querySelector(".modal-features-backdrop"),
  body: document.querySelector("body"),
  item: document.querySelector(".features-item"),
};
if (location.pathname === "/index.html" || location.pathname === "/") {
  refs.backdrop.insertAdjacentHTML("beforeend", featuresModal(noFrostItem));
  refs.backdrop.insertAdjacentHTML("beforeend", featuresModal(washersItem));
  refs.backdrop.insertAdjacentHTML("beforeend", featuresModal(tradeItem));
  refs.backdrop.insertAdjacentHTML("beforeend", featuresModal(tankItem));
}

const modal = document.querySelectorAll(".modal-features-backdrop");

function createModal() {
  refs.item.addEventListener("click", handlerOpenModal);
}

function handlerOpenModal(e) {
  if (e.target.dataset.id === "2") {
    const backdropWrapper = document.querySelectorAll(
      ".modal-features-wrapper"
    );
    backdropWrapper.forEach((el) => {
      if (el.dataset.id === "2") {
        el.classList.add("frost");
      }
    });
    modal.forEach((el) => {
      if (el.dataset.id === "2") {
        el.classList.add("is-opened");
      }
    });
    setTimeout(() => {
      backdropWrapper.forEach((el) => {
        if (el.dataset.id === "2") {
          el.classList.add("frost");
        }
      });
    }, 0.1);

    refs.body.classList.add("modal-open");
  } else if (e.target.dataset.id === "1") {
    modal.forEach((el) => {
      if (el.dataset.id === "1") {
        el.classList.add("is-opened");
      }
    });
    const backdropWrapper = document.querySelectorAll(
      ".modal-features-wrapper"
    );
    backdropWrapper.forEach((el) => {
      if (el.dataset.id === "1") {
        el.classList.add("washers");
      }
    });

    setTimeout(() => {
      backdropWrapper.forEach((el) => {
        if (el.dataset.id === "1") {
          el.classList.add("washers");
        }
      });
    }, 0.1);

    refs.body.classList.add("modal-open");
  } else if (e.target.dataset.id === "3") {
    modal.forEach((el) => {
      if (el.dataset.id === "3") {
        el.classList.add("is-opened");
      }
    });
    const backdropWrapper = document.querySelectorAll(
      ".modal-features-wrapper"
    );
    backdropWrapper.forEach((el) => {
      if (el.dataset.id === "3") {
        el.classList.add("trade-in");
      }
    });

    setTimeout(() => {
      backdropWrapper.forEach((el) => {
        if (el.dataset.id === "3") {
          el.classList.add("trade-in");
        }
      });
    }, 0.1);

    refs.body.classList.add("modal-open");
  } else if (e.target.dataset.id === "4") {
    modal.forEach((el) => {
      if (el.dataset.id === "4") {
        el.classList.add("is-opened");
      }
    });
    const backdropWrapper = document.querySelectorAll(
      ".modal-features-wrapper"
    );
    backdropWrapper.forEach((el) => {
      if (el.dataset.id === "4") {
        el.classList.add("tank");
      }
    });

    setTimeout(() => {
      backdropWrapper.forEach((el) => {
        if (el.dataset.id === "4") {
          el.classList.add("tank");
        }
      });
    }, 0.1);
    refs.body.classList.add("modal-open");
  }
}

if (location.pathname === "/index.html" || location.pathname === "/") {
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
    const backdropWrapper = document.querySelectorAll(
      ".modal-features-wrapper"
    );

    refs.body.classList.remove("modal-open");
    modal.forEach((el) => {
      el.classList.remove("is-opened");
    });
    backdropWrapper.forEach((el) => {
      el.classList.remove("is-open");
      el.classList.remove("washers");
      el.classList.remove("frost");
      el.classList.remove("tank");
      el.classList.remove("trade-in");
    });
  }
}

function handlerClickBtn(e) {
  if (e.target.nodeName === "I" || e.target.nodeName === "BUTTON") {
    const backdropWrapper = document.querySelectorAll(
      ".modal-features-wrapper"
    );

    // refs.backdrop.innerHTML = "";
    refs.body.classList.remove("modal-open");
    modal.forEach((el) => {
      el.classList.remove("is-opened");
    });
    backdropWrapper.forEach((el) => {
      el.classList.remove("is-open");
      el.classList.remove("washers");
      el.classList.remove("frost");
      el.classList.remove("tank");
      el.classList.remove("trade-in");
    });
  }
}

function handlerClickForBackdrop(e) {
  if (e.target.classList.contains("modal-features-backdrop")) {
    const backdropWrapper = document.querySelectorAll(
      ".modal-features-wrapper"
    );

    // refs.backdrop.innerHTML = "";
    refs.body.classList.remove("modal-open");
    modal.forEach((el) => {
      el.classList.remove("is-opened");
    });
    backdropWrapper.forEach((el) => {
      el.classList.remove("is-open");
      el.classList.remove("washers");
      el.classList.remove("frost");
      el.classList.remove("tank");
      el.classList.remove("trade-in");
    });
  }
}
