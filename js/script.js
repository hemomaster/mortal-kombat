document.addEventListener("DOMContentLoaded", () => {
  let vidBg;

  // Список медиазапросов
  const mql = window.matchMedia("(max-width: 768px)");
  const viewportChange = (e) => {
    if (e.matches) {
      // viewport меньше или равен 768px
      if (vidBg) {
        vidBg.removeVideo();
        console.log("ok");
      }
    } else {
      // viewport больше 768px
      vidBg = new vidbg(".app", {
        mp4: "video/video.mpa",
        webm: "video/video.webm",
        poster: "images/cover-image.jpg",
        overlay: false,
        overlayColor: "#000",
        overlayAlpha: 0.3,
      });
    }
  };

  mql.addEventListener("change", viewportChange);

  // MODAL WONDOW
  const modal = (actionBtnSl, windSl, overlaySl, cancelSl) => {
    const modalEl = document.querySelector(windSl),
      overlayEl = document.querySelector(overlaySl),
      subscribe = modalEl.querySelector("form");
    console.log("subscribe: ", subscribe);

    document.querySelector(actionBtnSl).addEventListener("click", () => {
      modalEl.classList.add("open");
    });

    modalEl.addEventListener("click", (evt) => {
      const target = evt.target;

      if (target === overlayEl || target.closest(cancelSl)) {
        modalEl.classList.remove("open");
      }
    });

    subscribe.addEventListener("submit", (evt) => {
      evt.preventDefault();
      modalEl.classList.remove("open");
    });
  };

  viewportChange(mql);
  modal(
    ".content__btn-preoffer",
    ".modal",
    ".modal__overlay",
    ".modal__body-cancel"
  );

  // const mediaBg = (selector, { ogv, mp4, webm, poster, bgcolor }) => {
  //   const parent = document.querySelector(selector);
  //   const box = document.createElement("div");
  //   box.classList.add("intro-media");
  //   box.style.backgroundColor = bgcolor;
  //   box.style.backgroundImage = `url("${poster}")`;
  //   box.innerHTML = `
  //   <video class="intro-media__video" autoplay muted loop>
  //     <source src="${webm}" type="video/webm" />
  //     <source src="${mp4}" type="video/mp4" />
  //     <source src="${ogv}" type="video/ogg" />
  //     Элемент video не поддерживается вашим браузером.
  //   </video>
  //   `;
  //   parent.append(box);
  // };

  // mediaBg(".app", {
  //   ogv: "./video/video.ogv",
  //   mp4: "./video/video.mpa",
  //   webm: "./video/video.webm",
  //   poster: "images/cover-image.jpg",
  //   bgcolor: "#020202",
  // });
});
