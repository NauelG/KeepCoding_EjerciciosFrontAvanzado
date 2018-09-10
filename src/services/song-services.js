class SongServices {
    constructor() {
        this.url = 'http://localhost:3001/songs';
    }

    getSongs() {
        return fetch(this.url).then(
                response => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }

                    return response.json();
                }).then(jsonSongs => jsonSongs)
            .catch(err => console.warn('Error', error));
    }
}

export default SongServices;