import './header-styles.scss';

export const makeHeader = ({ title }) => {
    const header = document.createElement('header');
    header.innerHTML = `<h1 class ="title">${ title }</h1>`;
    return header;
};

export default {
    makeHeader
};