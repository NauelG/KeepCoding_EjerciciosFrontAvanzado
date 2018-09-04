import { appendComponent } from 'utils/utils';
import { makeSong } from 'components/song/song-component';
import songsJSON from 'data/songs.json';

export const makeSongs = () => {
    const songs = document.createElement('div');
    songs.classList.add('songs');

    appendComponent(songs,
        songsJSON.map(songData => makeSong(songData)));
    return songs;
};

export default { makeSongs };