import template from "../template/template.hbs";
import washItems from "./wash-items.js";
import frostItems from "./frost-items.js";
import cleanItems from "./clean-items.js";
import bakeItems from "./bake-items.js";

const refs = {
  frost: document.querySelector(".frost"),
  wash: document.querySelector(".wash"),
  clean: document.querySelector(".clean"),
  bake: document.querySelector(".bake"),
  list: document.querySelector(".portfolio-item.list"),
};

function createCard() {
  refs.wash.addEventListener("click", handlerCreateWash);
  refs.frost.addEventListener("click", handlerCreateFrost);
  refs.clean.addEventListener("click", handlerCreateClean);
  refs.bake.addEventListener("click", handlerCreateBake);
}

function handlerCreateWash(e) {
  refs.frost.classList.remove("hover");
  refs.list.innerHTML = "";
  refs.list.insertAdjacentHTML("beforeend", template(washItems));
}
function handlerCreateFrost(e) {
  refs.frost.classList.remove("hover");
  refs.list.innerHTML = "";
  refs.list.insertAdjacentHTML("beforeend", template(frostItems));
}
function handlerCreateClean(e) {
  refs.frost.classList.remove("hover");
  refs.list.innerHTML = "";
  refs.list.insertAdjacentHTML("beforeend", template(cleanItems));
}
function handlerCreateBake(e) {
  refs.frost.classList.remove("hover");
  refs.list.innerHTML = "";
  refs.list.insertAdjacentHTML("beforeend", template(bakeItems));
}
if (location.pathname === "/portfolio.html") {
  refs.frost.classList.add("hover");
  refs.list.insertAdjacentHTML("beforeend", template(frostItems));
  createCard();
}
