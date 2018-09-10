import './song-styles.scss';

export const createSong = ({ title, author, imageUrl } = { title: 'No title', author: 'No author' }) => {
  const song = document.createElement('div');
  song.classList.add('song');
  song.innerHTML = `
    <img src="${imageUrl}" class="song-image" ></img>
    <p class="song-title">${title}</p>
    <p class="song-author">${author}</p>
  `;
  return song;
};

export default {
  createSong
};
