import React, { Component } from 'react';
import { fetchPhotos } from '../Fetch-API/api-fetch';
import { connect } from 'react-redux'
import Carousel from './Carousel';

class Photos extends Component {
    componentDidMount() {
        const { albumId } = this.props.match.params
        this.props.photosList(albumId)
    }

    render() {
        const { loading, photos, error } = this.props

        return loading === true ?
            <div>Loading...</div> : <Carousel images={photos}/>
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.photosReducer.loading,
        photos: state.photosReducer.photos,
        error: state.photosReducer.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        photosList: (albumId) => dispatch(fetchPhotos(albumId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos)

