import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryListRef = document.querySelector('.gallery');

function createGalleryListMarkup(array) {
  return array
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
         </a>`
    )
    .join('');
}

const galleryListMarkup = createGalleryListMarkup(galleryItems);
addGalleryListMarkup(galleryListMarkup);

function addGalleryListMarkup(markup) {
  galleryListRef.innerHTML = markup;
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
