import { galleryItems } from "./gallery-items.js";
// Change code below this line

const paletteContainer = document.querySelector(".gallery");

function createPhotoCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
      </a>`;
    })
    .join("");
}
const cardsMarkup = createPhotoCardMarkup(galleryItems);
paletteContainer.insertAdjacentHTML("beforeend", cardsMarkup);
paletteContainer.addEventListener("click", openImageClick);

function openImageClick(e) {
  e.preventDefault();

  //   const modal = basicLightbox.create(
  //     `<div class="modal">
  //         <img src="${e.target.dataset.source}" width="800" height="600"> </div>`,
  //     {
  //       onShow: () => window.addEventListener('keydown', onPressKeyESC),
  //       onClose: () => window.removeEventListener('keydown', onPressKeyESC),
  //     }
  //   );
  //   modal.show();

  function onPressKeyESC(e) {
    if (e.code === "Escape") {
      modal.close();
    }
  }
}
const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
gallery.on("show.simplelightbox", function () {
  // Do something…
});
