import './index.scss';
import { makeHeader } from 'components/header/header-component';
import { appendComponent } from 'utils/utils';
import { makeFooter } from 'components/footer/footer-component';
import { makeSongs } from 'components/songs/songs-component';



document.addEventListener('DOMContentLoaded', () => {
    var components = [
        makeHeader({ title: 'Keep Coding' }),
        makeFooter(),
        makeSongs()
    ]

    appendComponent(document.body, components);
});