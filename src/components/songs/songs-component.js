import { appendComponent } from 'utils/utils';
import { makeSong } from 'components/song/song-component';
import { makeContainer } from 'components/container/container-component';
import songsJSON from 'data/songs.json';
import './songs-styles.scss';

export const makeSongs = () => {
    const container = makeContainer();
    const songs = document.createElement('div');
    songs.classList.add('songs');

    appendComponent(songs,
        songsJSON.map(songData => makeSong(songData)));

    container.appendChild(songs);
    return container;
};
export default makeSongs;