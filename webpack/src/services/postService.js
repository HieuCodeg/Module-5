import axios from "axios";

class PostService {
    static getAlbums() {
        return axios.get('https://jsonplaceholder.typicode.com/albums');
    };
    static getPhotos(albumId) {
        return axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
    };
}

export default PostService;