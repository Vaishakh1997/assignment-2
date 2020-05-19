import React from 'react';
import { shallow } from 'enzyme';
import * as actions from './index'


describe('Albums Action', () => {

    it('should create an action to fetch albums request', () => {
        const albumsRequest = {
            type: actions.FETCH_ALBUMS_REQUEST,
        }
        expect(actions.fetchAlbumsRequest()).toEqual(albumsRequest)
    })

    it('should create an action to fetch albums error', () => {
        const albumsError = {
            type: actions.FETCH_ALBUMS_ERROR,
        }
        expect(actions.fetchAlbumsError()).toEqual(albumsError)
    })

})


describe('Photos Action', () => {
    it('should create an action to fetch photos request', () => {
        const photosRequest = {
            type: actions.FETCH_PHOTOS_REQUEST,
        }
        expect(actions.fetchPhotosRequest()).toEqual(photosRequest)
    })

    it('should create an action to fetch photos error', () => {
        const photosError = {
            type: actions.FETCH_PHOTOS_ERROR,
        }
        expect(actions.fetchPhotosError()).toEqual(photosError)
    })

})