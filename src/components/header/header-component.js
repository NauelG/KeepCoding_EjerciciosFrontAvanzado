import './header-styles.scss';
import meeseeksImage from 'assets/meeseeks.png';

export const makeHeader = ({ title }) => {
    const header = document.createElement('header');
    header.innerHTML = `
    <div class="header">
    <i class="fas fa-headphones headphones-icon"></i>
    <h1 class ="title">${ title }</h1>
    <img class="logo" src="${meeseeksImage}"/>
    </div>
    `;
    return header;
};

export default {
    makeHeader
};