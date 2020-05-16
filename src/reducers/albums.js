const initialState = {
    loading: false,
    albums: [],
    error: '',
}

const FETCH_ALBUMS_REQUEST = 'FETCH_ALBUMS_REQUEST'
const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS'
const FETCH_ALBUMS_ERROR = 'FETCH_ALBUMS_ERROR'

const albumsReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_ALBUMS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_ALBUMS_SUCCESS:
            return {
                loading: false,
                albums: action.payload,
                error: ''
            }

        case FETCH_ALBUMS_ERROR:
            return {
                loading: false,
                albums: [],
                error: action.payload
            }

        default: return state
    }
}


export default albumsReducer