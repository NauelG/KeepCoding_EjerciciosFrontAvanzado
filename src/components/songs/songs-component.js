import { appendComponent } from 'utils/utils';
import { createSong } from 'components/song/song-component';

export const createSongs = () => {
  const songs = document.getElementById('songs');
  fetch('http://localhost:8000/songs').then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      console.warn('error', response.status);
      return null;
    }
  ).then((songsJSON) => {
    appendComponent(songs,
      songsJSON.map(songData => createSong(songData)));
  });
};

export default createSongs;
