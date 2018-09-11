import { appendComponent } from 'utils/utils';
import { createSong } from 'components/song/song-component';
import SongService from 'services/song-service';

export const createSongs = () => {
  const songs = document.getElementById('songs');
  const songsServiceInstance = new SongService();
  songs.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
  songsServiceInstance.getSongs().then((songsJson) => {
    songs.innerHTML = '';
    if (songsJson.length === 0) {
      songs.innerHTML = 'No songs';
    } else {
      appendComponent(songs,
        songsJson.map(songData => createSong(songData)));
    }
  }).catch(() => {
    songs.innerHTML = 'There was an error, please reload';
  });
  return songs;
};

export default createSongs;
