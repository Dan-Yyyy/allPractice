import * as axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
 
export const albums = {
  albums({queryKey}) {
    const [ , , id] = queryKey;
    return axios.get(`albums/${id}`)
    .then(response => {
      return response.data
    })
  },
  getAlbums({ queryKey }) {
    const [ , page, limit] = queryKey;
    return axios.get(`albums?_page=${page}&_limit=${limit}`)
    .then(response => {
      return response.data
    })
  },
  getPhotosAlbum({ queryKey }) {
    const [ , page, idAlbum] = queryKey;
    return axios.get(`albums/${idAlbum}/photos?_page=${page}`)
    .then(response => {
      return response.data
    })
  }
}
