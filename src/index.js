import './index.scss';
import { makeHeader } from './components/header/header-component';

document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(makeHeader({ title: 'Keep Coding' }));
});