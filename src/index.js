import './index.scss';
import { makeHeader } from 'components/header/header-component';
import { appendComponent } from 'utils/utils';
import { makeFooter } from 'components/footer/footer-component';



document.addEventListener('DOMContentLoaded', () => {
    var components = [
        makeHeader({ title: 'Keep Coding' }),
        makeFooter()
    ]

    appendComponent(document.body, components);
});