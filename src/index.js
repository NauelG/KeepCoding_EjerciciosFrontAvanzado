import './index.scss';
import { appendComponent } from 'utils/utils';
import { makeHeader } from 'components/header/header-component';
import { makeFooter } from 'components/footer/footer-component';
import { makeSongs } from 'components/songs/songs-component';
import { makeVideo } from 'components/video/video-component';

document.addEventListener('DOMContentLoaded', () => {
    const components = [
        makeHeader({ title: 'Keep playing' }),
        makeSongs(),
        makeVideo(),
        makeFooter()
    ];
    appendComponent(document.body, components);
});