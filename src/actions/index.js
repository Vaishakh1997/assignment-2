
const FETCH_ALBUMS_REQUEST = 'FETCH_ALBUMS_REQUEST'
const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS'
const FETCH_ALBUMS_ERROR = 'FETCH_ALBUMS_ERROR'

const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST'
const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS'
const FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR'



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




export const fetchPhotosRequest = () => {
    return {
      type: FETCH_PHOTOS_REQUEST
    }
  }
export const fetchPhotosSuccess = (photos) => {
    return {
        type: FETCH_PHOTOS_SUCCESS,
        payload: photos
    }
}
export const fetchPhotosError = error => {
    return {
      type: FETCH_PHOTOS_ERROR,
      payload: error
    }
  }





