export const createSong = ({
  title, author, imageUrl, id
} = { title: 'No title', author: 'No author' }) => {
  const song = document.createElement('div');
  song.classList.add('song');
  song.innerHTML = `
    <a class="song-title" href="/song/?id=${id}">
      <img src="${imageUrl}" class="song-image" ></img>
    </a>
    <div>
      <a class="song-title" href="/song/?id=${id}">${title}</a>
    </div>
    <p class="song-author">${author}</p>
  `;
  return song;
};

export default {
  createSong
};
