import './footer-styles.scss';

export const makeFooter = () => {
    const footer = document.createElement('footer');
    footer.innerHTML = '<div>KeepCoding 2018</div>';
    return footer;
}

export default {
    makeFooter
};