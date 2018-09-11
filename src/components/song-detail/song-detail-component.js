export const updateSongDetail = ({
  title, author, imageUrl, description
} = { title: 'No title', author: 'No author' }) => {
  const song = document.getElementById('song-detail');
  song.innerHTML = `
    <p title="Song title" class="song-title">${title}</p>
    <p title="Author" class="song-author">${author}</p>
    <img src="${imageUrl}" class="song-image" ></img>
    <div>
      <a title="back" class="back" href='javascript:history.back()'><- Go Back</a>
    </div>
    <div class="song-detail-description">
      ${description}
    </div>
  `;
};

export default {
  updateSongDetail
};
