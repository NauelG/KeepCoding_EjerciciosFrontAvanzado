import { updateHeader } from 'components/header/header-component';
import { createSongs, updateSongs } from 'components/songs/songs-component';
import 'styles/main.scss';
import PubSub from 'pubsub-js';

updateHeader({ title: 'Keep playing', active: 'home' });
createSongs();

PubSub.subscribe('reload', () => {
  updateSongs();
  document.getElementById('modal').classList.add('hidden');
});
