export const updateHeader = ({ title }) => {
    const titleElement = document.getElementById('title');
    titleElement.innerHTML = title;
};

export default {
    updateHeader
};