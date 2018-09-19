import { appendComponent, getFormData } from 'utils/utils';
import { createSong } from 'components/song/song-component';
import SongService from 'services/song-service';
import PubSub from 'pubsub-js';

const handleSongForm = (songsServiceInstance) => {
  const songForm = document.getElementById('song-form');
  const submitFormButton = document.getElementById('song-form-submit');
  const formInputs = songForm.getElementsByClassName('song-input');

  submitFormButton.addEventListener('click', (e) => {
    e.preventDefault();
    submitFormButton.disable = true;
    songsServiceInstance.postSong(getFormData(formInputs)).then(
      (response) => {
        if (response === true) {
          songForm.reset();
          PubSub.publish('reload');
        }
      }
    );
  });
};

const loadSongs = (songsJson, songs) => {
  const updatedSongs = songs;
  if (songsJson.length === 0) {
    updatedSongs.innerHTML = 'No songs';
  } else {
    appendComponent(updatedSongs,
      songsJson.map(songData => createSong(songData)));
  }
};

const showModal = (modal) => {
  document.getElementById('create-song-button').addEventListener('click', () => {
    modal.classList.remove('hidden');
  });
};

export const updateSongs = () => {
  const songsServiceInstance = new SongService();
  const songs = document.getElementById('songs');
  songs.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
  songsServiceInstance.getSongs().then((songsJson) => {
    songs.innerHTML = '';
    loadSongs(songsJson, songs);
  }).catch(() => {
    songs.innerHTML = 'There was an error, please reload';
  });
};

export const createSongs = () => {
  const songsServiceInstance = new SongService();
  const songs = document.getElementById('songs');
  updateSongs();
  const modal = document.getElementById('modal');
  showModal(modal);
  document.getElementById('cancel-song-form').addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  handleSongForm(songsServiceInstance);

  return songs;
};

export default createSongs;
