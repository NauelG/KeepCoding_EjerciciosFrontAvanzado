import { appendComponent } from 'utils/utils';
import { createSong } from 'components/song/song-component';
import SongServices from 'services/song-services';

export const createSongs = () => {
    const songs = document.getElementById('songs');
    const songServiceInstance = new SongServices();

    songServiceInstance.getSongs().then(songsJson => {
        appendComponent(songs, songsJson.map(songData => createSong(songData)));
    })
};

export default createSongs;