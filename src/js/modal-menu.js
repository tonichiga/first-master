const modalMenu = () => `
    <div class="backdrop is-hidden hidden" data-modal>
      <div class="modal-wrapper modal-form">
        <form
          id="email_form"
          method="post"
          action="https://postmail.invotes.com/send"
          class="modal-form1"
        >
          <h3 class="modal-form-title">
            Оставьте свои данные, мы вам перезвоним
          </h3>

          <div class="modal-form-container">
            <input
              class="modal-form-input"
              type="text"
              id="name"
              name="subject"
              placeholder=" "
            />
            <label class="modal-label" for="name">Имя</label>

            <svg class="modal-form-icon-svg">
              <use href="./image/sprite.svg#icon-name"></use>
            </svg>
          </div>
          <div class="modal-form-container">
            <input
              class="modal-form-input"
              type="text"
              id="tel"
              name="extra_phone_number"
              placeholder=" "
            />
            <label class="modal-label" for="tel">Телефон</label>

            <svg class="modal-form-icon-svg">
              <use href="./image/sprite.svg#icon-tel"></use>
            </svg>
          </div>
          <div class="modal-form-container">
            <input
              class="modal-form-input"
              type="text"
              name="extra_email"
              placeholder=" "
            />
            <label class="modal-label" for="email">Почта</label>

            <svg class="modal-form-icon-svg">
              <use href="./image/sprite.svg#icon-email"></use>
            </svg>
          </div>

          <textarea
            class="modal-form-textarea"
            name="text"
            placeholder="Комментарий"
          ></textarea>

          <input
            type="hidden"
            name="access_token"
            id="token"
            value="np1rs4w6zpmyi1jrowji74e7"
          />
          <input
            type="hidden"
            name="success_url"
            value=".?message=Email+Successfully+Sent%21&isError=0"
          />
          <input
            type="hidden"
            name="error_url"
            value=".?message=Email+could+not+be+sent.&isError=1"
          />
          <div class="modal-textarea-container"></div>
          <div class="modal-checkbox-container">
            <!-- <label class="test" for="checkbox">
              <input
                class="modal-form-checkbox"
                type="checkbox"
                id="checkbox"
                name="policy"
                value="accept-policy"
              /><span class="modal-form-checkbox-title">
                Соглашаюсь с рассылкой и принимаю
                <a class="modal-form-title-link" href="#">Условия договора</a>
              </span>
              <svg class="modal-custom-checkbox">
                <use href="./image/sprite.svg#icon-check"></use>
              </svg>
            </label> -->
          </div>
          <button
            class="modal-btn-submit"
            id="submit_form"
            type="submit"
            value="Send"
          >
            Отправить
          </button>

          <button type="button" class="close-btn"></button>
          <svg data-modal-close class="modal-form-icon-close">
            <use href="./image/sprite.svg#icon-close"></use>
          </svg>
        </form>
      </div>
    </div>
`;

const modalOpen = document.querySelector(".general-btn");
const body = document.querySelector("body");
modalOpen.addEventListener("click", handlerOpenModal);

function handlerOpenModal(e) {
  body.insertAdjacentHTML("beforeend", modalMenu());
  //   (() => {
  //     const refs = {
  //       openModalBtn: document.querySelectorAll("[data-modal-open]"),
  //       closeModalBtn: document.querySelector("[data-modal-close]"),
  //       modal: document.querySelector("[data-modal]"),
  //     };

  //     refs.openModalBtn.forEach((el) => {
  //       el.addEventListener("click", toggleModal);
  //     });
  //     refs.closeModalBtn.addEventListener("click", toggleModal);

  //     function toggleModal() {
  //       refs.modal.classList.toggle("is-hidden");
  //     }
  //   })();
  (() => {
    const refs = {
      openModalBtn: document.querySelectorAll("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.forEach((el) => {
      el.addEventListener("click", toggleModal);
    });
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
}
