const initialState = {
    photos: []
}

const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST'

const photosReducer = (state = initialState, action) => {
  switch(action.type){
      case FETCH_PHOTOS_REQUEST:
          return {
              photos : action.payload
          }
  }
}

export default photosReducer