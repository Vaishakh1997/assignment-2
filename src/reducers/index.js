import albumsReducer from './albums'
import photosReducer from './photos'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    albumsData: albumsReducer,
    imagesDate: photosReducer
})

export default allReducers