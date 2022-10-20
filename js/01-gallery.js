import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const gallery = galleryItems
  .map(
    (image) =>
      `<ul>
            <li class="gallery__item">
                <img class="gallery__image" src="${image.preview}" alt="${image.description}" srcset="${image.original}"/>
            </li>
        </ul>`
  )
  .join("");

galleryContainer.insertAdjacentHTML("afterbegin", gallery);

galleryContainer.addEventListener("click", bigPicture);

function bigPicture(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const bigImgModal = basicLightbox.create(`
    <img src="${evt.target.srcset}">
`);

  bigImgModal.show();

  window.addEventListener("keydown", closeBigImgModal);
  function closeBigImgModal(evt) {
    const ESC_KEY_CODE = "Escape";
    const isEscKey = evt.code === ESC_KEY_CODE;
    if (isEscKey) {
      bigImgModal.close();
    } else {
      return;
    }
    window.removeEventListener("keydown", closeBigImgModal);
    console.log(evt);
  }
}
