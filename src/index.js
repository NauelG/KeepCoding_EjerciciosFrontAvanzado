import './index.scss';
import { makeHeader } from './components/header/header-component';
import { makeImage } from './components/image/image-component';

document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(makeHeader({ title: 'Keep Coding' }));
    document.body.appendChild(makeImage());
});