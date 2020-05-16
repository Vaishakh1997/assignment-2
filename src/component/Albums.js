import React, { Component, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect, Link} from "react-router-dom";
import '../App.css'
import {connect} from 'react-redux'
import { fetchAlbums } from '../actions'
import { createBrowserHistory } from 'history';

export const browserHistory = createBrowserHistory();

const axios = require('axios');



class Albums extends Component {
    constructor(props) {
        super(props);
      }

    componentDidMount() {
        this.props.albumsList()
    }

    render() {
        const { loading, albums, error } = this.props
    console.log(albums)
        const albumsList = albums.map((album) => {
            
                return(
                    // <Link key={album.id} to={`/album/${album.id}`}>
                    <div className="album" key={album.id} onClick={()=>goToPhotos(album.id)}>
                        <h2>{album.title}</h2>
                    </div>
                    // </Link>
                )
    
            })
        return loading === true ? <div>Loading...</div> : <div className="albums-list">{albumsList}</div> 
        
      }
}

const goToPhotos = (albumId) => {
    browserHistory.push(`/albums/${albumId}`)
}


const mapStateToProps = (state) => {
    return {
      loading: state.loading,
      albums: state.albums,
      error: state.error,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      albumsList: () => dispatch(fetchAlbums()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Albums)


