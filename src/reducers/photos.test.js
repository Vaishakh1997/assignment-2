import * as actionTypes from '../actions/index'
import photosReducer from './photos'

describe('Albums Reducer', () => {

    const initialState = {
        loading: false,
        photos: [],
        error: '',
    }

    it('should return Initial state', () => {
        expect(
            photosReducer(undefined, {})
        ).toEqual(initialState)
    })

    it('should handle FETCH_PHOTOS_REQUEST', () => {
        expect(
            photosReducer(initialState, { 
                type: actionTypes.FETCH_PHOTOS_REQUEST 
            })
        ).toEqual(
            {
                loading: true,
                photos: [],
                error: '', 
            }
        )
    })

    it('should handle FETCH_PHOTOS_SUCCESS', () => {
        const payload = "payload"
        expect(
            photosReducer(initialState, {
                type: actionTypes.FETCH_PHOTOS_SUCCESS,
                payload: payload
            })
        ).toEqual(
            {
                loading: false,
                photos: payload,
                error: ''
            }
        )
    })

    it('should handle FETCH_PHOTOS_ERROR', () => {
        const payload = "payload"
        expect(
            photosReducer(initialState, {
                type: actionTypes.FETCH_PHOTOS_ERROR,
                payload: payload
            })
        ).toEqual(
            {
                loading: false,
                photos: [],
                error: payload
            }
        )
    })

})