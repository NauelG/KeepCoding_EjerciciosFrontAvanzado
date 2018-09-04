import bigImage from '../../../assets/nature-big.jpg';

export const makeImage = () => {
    const image = document.createElement('img');
    image.title = 'Big image';
    image.alt = 'Big Image';
    image.src = bigImage;
    return image;
};

export default { makeImage };