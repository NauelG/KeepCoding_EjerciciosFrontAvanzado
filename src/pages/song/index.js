import { updateHeader } from 'components/header/header-component';
import { updateSongDetail } from 'components/song-detail/song-detail-component';
import queryString from 'query-string';
import SongService from 'services/song-service';
import 'styles/main.scss';

const SongServiceInstance = new SongService();
const query = queryString.parse(window.location.search);
const songId = query && query.id;
console.log('songId', songId);

if (songId) {
  SongServiceInstance.getSong(songId).then((songJSON) => {
    updateSongDetail(songJSON);
  });
}
updateHeader({ title: 'Keep playing - Detail', active: 'song-detail' });

