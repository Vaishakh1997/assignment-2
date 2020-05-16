import Photos from "../component/Photos"
import axios from 'axios'

const FETCH_ALBUMS_REQUEST = 'FETCH_ALBUMS_REQUEST'
const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS'
const FETCH_ALBUMS_ERROR = 'FETCH_ALBUMS_ERROR'



const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST'

export const fetchAlbumsRequest = () => {
    return {
      type: FETCH_ALBUMS_REQUEST
    }
  }
export const fetchAlbumsSuccess = (albums) => {
    return {
        type: FETCH_ALBUMS_SUCCESS,
        payload: albums
    }
}
export const fetchAlbumsError = error => {
    return {
      type: FETCH_ALBUMS_ERROR,
      payload: error
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
        dispatch(fetchAlbumsRequest())
        axios({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/albums`
          })
            .then(response=> 
                dispatch(fetchAlbumsSuccess(response.data))
                )
            .catch(error=> dispatch(fetchAlbumsError(error)))
    }
}