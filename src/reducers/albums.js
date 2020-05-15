const initialState = {
    albums: []
}

const FETCH_ALBUMS_REQUEST = 'FETCH_ALBUMS_REQUEST'

const albumsReducer = (state = initialState, action) => {
  switch(action.type){
      case FETCH_ALBUMS_REQUEST:
          return {
              albums : action.payload
          }
  }
}

export default albumsReducer