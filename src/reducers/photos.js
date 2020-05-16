
const initialState = {
    loading: false,
    photos: [],
    error: '',
}

const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST'
const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS'
const FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR'

const photosReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_PHOTOS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_PHOTOS_SUCCESS:
            return {
                loading: false,
                photos: action.payload,
                error: ''
            }

        case FETCH_PHOTOS_ERROR:
            return {
                loading: false,
                photos: [],
                error: action.payload
            }

        default: return state
    }
}


export default photosReducer