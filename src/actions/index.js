import Photos from "../component/Photos"
import axios from 'axios'

const FETCH_ALBUMS_REQUEST = 'FETCH_ALBUMS_REQUEST'
const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST'


export const fetchAlbumsRequest = (albums) => {
    return {
        type: FETCH_ALBUMS_REQUEST,
        payload: albums
    }
}

export const fetchPhotosRequest = (photos) => {
    return {
        type: FETCH_PHOTOS_REQUEST,
        payload: Photos
    }
}

export const fetchAlbums = () => {
    return function(dispatch){
        axios({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/albums`
          })
            .then(response=> 
                dispatch(fetchAlbumsRequest(response.data))
                )
            .catch(error=> console.error(error))
    }
}