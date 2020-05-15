import { createStore, applyMiddleware } from 'redux'
import albumsReducer from './reducers/albums'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(
    albumsReducer,
    composeWithDevTools(applyMiddleware(thunk))
    )

export default store