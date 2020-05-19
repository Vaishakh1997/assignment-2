import { fetchAlbumsRequest, fetchAlbumsSuccess, fetchAlbumsError, fetchPhotosRequest, fetchPhotosSuccess, fetchPhotosError} from '../actions/index'
import axios from 'axios'

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

export const fetchPhotos = (albumId) => {
    return function(dispatch){
        dispatch(fetchPhotosRequest())
        axios({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
          })
        .then(response => {
            var allImageURL = []
            response.data.map(photo => allImageURL.push(photo.url))
            dispatch(fetchPhotosSuccess(allImageURL))
        })
        .catch(error => dispatch(fetchPhotosError(error)))
    }
}
