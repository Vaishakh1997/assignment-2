import React, { Component } from 'react';
import { fetchPhotos } from '../Fetch-API/api-fetch';
import { connect } from 'react-redux'
class Photos extends Component {
    componentDidMount() {
        const { albumId } = this.props.match.params
        this.props.photosList(albumId)
    }

    render() {
        const { loading, photos, error } = this.props

        return loading === true ?
            <div>Loading...</div> :
            <React.Fragment>
                <div className="Photos-list">
                    {/* <button className="prev" onClick={this.prevSlide}>
                         {prev}
                     </button> */}

                    <div className="slider">
                        <div className="slides">
                            {photos.map((url, index) => {
                                return (
                                    <div id={index + 1} key={index}>
                                        <img
                                            style={{ width: "100%", height: "100%" }}
                                            src={url}
                                            alt={index}
                                        ></img>
                                    </div>
                                );
                            })}
                        </div>

                        {photos.map((url, index) => {
                            let targetID = `#${index + 1}`;
                            return (
                                <a href={targetID} key={targetID}></a>
                            );
                        })}
                    </div>

                    {/* <button className="next" onClick={this.nextSlide}>
                        {next}
                    </button> */}
                </div>
            </React.Fragment>
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

