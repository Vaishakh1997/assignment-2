import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from '../actions/index'
import { fetchAlbums, fetchPhotos } from './api-fetch'
import fetchMock from 'fetch-mock'
import albumsPayload from '../payload/albumsPayload'
import photosPayload from '../payload/photosPayload'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe('async Fetch albums actions', () => {

  afterEach(() => {
    fetchMock.restore()
  })

  it("handles changing a Albums status", async () => {
    const store = mockStore({ loading: false, albums:[], error:'' });
    store.dispatch(fetchAlbums());

    fetchMock.get('https://jsonplaceholder.typicode.com/albums', {
        payload: albumsPayload, 
      })

    expect(await getAction(store, "FETCH_ALBUMS_REQUEST")).toEqual({type: types.FETCH_ALBUMS_REQUEST});

    expect(await getAction(store, "FETCH_ALBUMS_SUCCESS")).toEqual({
        type: types.FETCH_ALBUMS_SUCCESS,
        payload: albumsPayload
    });
  },5000);

})



describe('async Fetch photos actions', () => {

    afterEach(() => {
      fetchMock.restore()
    })
  
    it("handles changing a photos status", async () => {
      const store = mockStore({ loading: false, photos:[], error:'' });
      store.dispatch(fetchPhotos(1));
  
      fetchMock.get('https://jsonplaceholder.typicode.com/photos?albumId=1', {
          payload: photosPayload, 
        })
  
      expect(await getAction(store, "FETCH_PHOTOS_REQUEST")).toEqual({type: types.FETCH_PHOTOS_REQUEST});
  
      expect(await getAction(store, "FETCH_PHOTOS_SUCCESS")).toEqual({
          type: types.FETCH_PHOTOS_SUCCESS,
          payload: photosPayload
      });

    }, 20000);
  
  })






function findAction(store, type) {
    return store.getActions().find(action => action.type === type);
  }
  
function getAction(store, type) {
    const action = findAction(store, type);
    if (action) return Promise.resolve(action);
  
    return new Promise(resolve => {
      store.subscribe(() => {
        const action = findAction(store, type);
        if (action) resolve(action);
      });
    });
  }