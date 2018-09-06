import './video-styles.scss';

export const makeVideo = () => {
    const videoContainer = document.createElement('div');
    videoContainer.classList.add('video-container');
    videoContainer.innerHTML = '<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/xR7bapGKhg4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    return videoContainer;
};

export default {
    makeVideo
};