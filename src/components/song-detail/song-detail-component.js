import meeseeksUrl from 'assets/nature-500.jpg';
// import anime from 'animejs';

const isLiked = id => localStorage.getItem(`song-${id}`);

const toggleLike = (id) => {
  const likeValue = isLiked(id) === 'true' ? 'false' : 'true';
  localStorage.setItem(`song-${id}`, likeValue);
};

const setInitialLikeValue = (likeButton, liked) => {
  if (liked === 'true') likeButton.children[0].classList.add('fas');
};

export const updateSongDetail = ({
  title, author, imageUrl, description, id
} = { title: 'No title', author: 'No author' }) => {
  const song = document.getElementById('song-detail');
  const descriptionDiv = description ? (
    `<div class="song-detail-description">
      ${description}
    </div>`
  ) : '';
  const image = imageUrl !== '' ? imageUrl : meeseeksUrl;
  song.innerHTML = `
    <div class="title-container">
      <h2 title="Song title" class="song-title">${title}</h2>
      <button id="like-button" class="like-button">
        <i class="far fa-heart"></i>
      </button>
    </div>
    <p title="Author" class="song-author">${author}</p>
    <img src="${image}" class="song-image" ></img>
    <div>
      <a title="back" class="back" href='javascript:history.back()'><- Go Back</a>
    </div>
    ${descriptionDiv}
  `;

  const likeButton = document.getElementById('like-button');

  setInitialLikeValue(likeButton, isLiked(id));

  // Animación con Anime JS

  // anime({
  //   targets: likeButton.children[0],
  //   translateX: 100,
  //   duration: 2000
  // });

  // Animación con Web animation API

  // slideIn(likeButton.children[0]);
  likeButton.addEventListener('click', () => {
    likeButton.children[0].classList.toggle('fas');
    toggleLike(id);
  });
};

export default {
  updateSongDetail
};
