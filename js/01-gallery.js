import { galleryItems } from './gallery-items.js';
// Change code below this line
//вариант 1
const paletteContainer = document.querySelector('.gallery');

function createPhotoCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
        `;
    })
    .join('');
}
const cardsMarkup = createPhotoCardMarkup(galleryItems);
paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

paletteContainer.addEventListener('click', openImageClick);

function openImageClick(e) {
  e.preventDefault();

  const modal = basicLightbox.create(
    `<div class="modal">
        <img src="${e.target.dataset.source}" width="800" height="600"> </div>`,
    {
      onShow: () => window.addEventListener('keydown', onPressKeyESC),
      onClose: () => window.removeEventListener('keydown', onPressKeyESC),
    }
  );
  modal.show();

  function onPressKeyESC(e) {
    if (e.code === 'Escape') {
      modal.close();
    }
  }
}

// вариант 2
// paletteContainer.addEventListener('click', openImageClick);

// function openImageClick(event) {
// const isImage = event.target.classList.contains('gallery__image');
// if (!isImage) return;

// event.preventDefault();

// event.target.src = event.target.dataset.source;

// const instance = basicLightbox.create(`
// <div class="modal">
// <img src = "${event.target.src}"/>
// </div>`)

// instance.show()
// }

