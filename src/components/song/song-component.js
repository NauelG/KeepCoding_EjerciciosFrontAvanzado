import './song-styles.scss';

export const makeSong = ({ title, author, imageUrl } = { title: 'No title', author: 'No author', imageUrl: 'No image' }) => {
    const song = document.createElement('div');
    song.classList.add('song');
    song.innerHTML = `
    <img src="${imageUrl}" class="song-image" ></img>
    <p class="song-title">${title}</p>
    <p class="song-author">${author}</p>
  `;

    return song;
}

export default {
    makeSong
};