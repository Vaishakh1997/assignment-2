import albumsReducer from './albums'
import photosReducer from './photos'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    albumsReducer: albumsReducer,
    photosReducer: photosReducer
})

export default rootReducers