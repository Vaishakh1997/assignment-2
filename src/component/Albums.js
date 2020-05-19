import React, { Component, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect, Link } from "react-router-dom";
import '../App.css'
import { connect } from 'react-redux'
import { fetchAlbums } from '../Fetch-API/api-fetch'

export class Albums extends Component {

    componentDidMount() {
        this.props.albumsList()
    }

    render() {
        const { loading, albums, error } = this.props

        const albumsList = albums.map((album) => {
            return (
                <div className="album" key={album.id} >
                    <Link style={{ textDecoration: 'none' }} to={`/albums/${album.id}`}>
                        <h2>{album.title}</h2>
                    </Link>
                </div>
            )
        })

        return loading === true ? <div>Loading...</div> : 
        <React.Fragment>
            <h2>Albums</h2><div className="albums-list">{albumsList}</div>
        </React.Fragment>
    }
}


const mapStateToProps = (state) => {
    return {
        loading: state.albumsReducer.loading,
        albums: state.albumsReducer.albums,
        error: state.albumsReducer.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        albumsList: () => dispatch(fetchAlbums()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums)


