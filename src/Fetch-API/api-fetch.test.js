import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from '../actions/index'
import { fetchAlbums, fetchPhotos } from './api-fetch'
import expect from 'expect'
import albumsPayload from '../payload/albumsPayload'
import photosPayload from '../payload/photosPayload'
import moxios from 'moxios'


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Albums Async actions', () => {

  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('fetching All albums Successfully', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: albumsPayload,
      })
    })

    const expectedActions = [ 
        {type: types.FETCH_ALBUMS_REQUEST},
        {type: types.FETCH_ALBUMS_SUCCESS, payload: albumsPayload}
    ]

    const store = mockStore()

    return store.dispatch(fetchAlbums()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  

  it('fetching All photos Successfully', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: photosPayload,
      })
    })

    const expectedActions = [ 
        {type: types.FETCH_PHOTOS_REQUEST},
        {type: types.FETCH_PHOTOS_SUCCESS, payload: photosPayload}
    ]

    const store = mockStore()

    return store.dispatch(fetchPhotos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})