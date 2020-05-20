import * as actionTypes from '../actions/index'
import albumsReducer from './albums'

describe('Albums Reducer', () => {

    const initialState = {
        loading: false,
        albums: [],
        error: '',
    }

    it('should return Initial state', () => {
        expect(
            albumsReducer(undefined, {})
        ).toEqual(initialState)
    })

    it('should handle FETCH_ALBUMS_REQUEST', () => {
        expect(
            albumsReducer(initialState, { 
                type: actionTypes.FETCH_ALBUMS_REQUEST 
            })
        ).toEqual(
            {
                loading: true,
                albums: [],
                error: '',
            }
        )
    })

    it('should handle FETCH_ALBUMS_SUCCESS', () => {
        const payload = "payload"
        expect(
            albumsReducer(initialState, {
                type: actionTypes.FETCH_ALBUMS_SUCCESS,
                payload: payload
            })
        ).toEqual(
            {
                loading: false,
                albums: payload,
                error: ''
            }
        )
    })

    it('should handle FETCH_ALBUMS_ERROR', () => {
        const payload = "payload"
        expect(
            albumsReducer(initialState, {
                type: actionTypes.FETCH_ALBUMS_ERROR,
                payload: payload
            })
        ).toEqual(
            {
                loading: false,
                albums: [],
                error: payload
            }
        )
    })

})