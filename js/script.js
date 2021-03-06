// слайдер
$(".opportunities__items").slick({
  dots: true,
  infinite: false,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnFocus: true,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  prevArrow: `          <button type="button" class="slick-prev">
            <svg
              width="16"
              height="26"
              viewBox="0 0 16 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.7344 0.51706L0.560296 11.7517C-0.186766 12.4411 -0.186766 13.5589 0.560296 14.2483L12.7344 25.4829C13.4814 26.1724 14.6926 26.1724 15.4397 25.4829C16.1868 24.7935 16.1868 23.6758 15.4397 22.9864L4.61832 13L15.4397 3.01365C16.1868 2.32423 16.1868 1.20647 15.4397 0.51706C14.6926 -0.172353 13.4814 -0.172353 12.7344 0.51706Z"
                fill="white"
              />
            </svg>
          </button>`,
  nextArrow: `          <button type="button" class="slick-next">
            <svg
              width="16"
              height="26"
              viewBox="0 0 16 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.26564 0.51706L15.4397 11.7517C16.1868 12.4411 16.1868 13.5589 15.4397 14.2483L3.26564 25.4829C2.51858 26.1724 1.30736 26.1724 0.560296 25.4829C-0.186765 24.7935 -0.186765 23.6758 0.560296 22.9864L11.3817 13L0.560296 3.01365C-0.186765 2.32423 -0.186765 1.20647 0.560296 0.51706C1.30736 -0.172353 2.51858 -0.172353 3.26564 0.51706Z"
                fill="white"
              />
            </svg>
          </button>`,
});

// сокращенный текст
$(".opportunities__item-text").shorten({
  moreText: "Читать далее",
  lessText: "",
  showChars: 348,
});

// форма обратной связи
const form = document.getElementById("form");
form.addEventListener("submit", formSend);

async function formSend(e) {
  e.preventDefault();
  let error = formValidate(form);

  let formData = new FormData(form);

  if (error === 0) {
    form.classList.add("footer__form--sending");
    let response = await fetch("sendmail.php", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      let result = await response.json();
      alert(result.message);
      form.reset();
      form.classList.remove("footer__form--sending");
    } else {
      alert("Ошибка");
      form.classList.remove("footer__form--sending");
    }
  } else {
    alert("Заполните обязательное поле в формате ivanivanov@mail.ru");
  }
}

function formValidate(form) {
  let error = 0;
  let formReq = document.querySelectorAll(".footer__input--required");
  const input = document.querySelector(".footer__input--email");

  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    formRemoveError(input);

    if (input.classList.contains("footer__input--email")) {
      if (emailTest(input)) {
        formAddError(input);
        error++;
      }
    } else {
      if (input.value === "") {
        formAddError(input);
        error++;
      }
    }
  }
  return error;
}

function formAddError(input) {
  // input.parentElement.classList.add('footer__input--error');
  input.classList.add("footer__input--error");
}
function formRemoveError(input) {
  // input.parentElement.classList.remove('footer__input--error');
  input.classList.remove("footer__input--error");
}

function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

// плавный переход к футеру
$(document).on("click", ".main-top__link", function () {
  var linkID = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(linkID).offset().top,
    },
    "slow"
  );
});
