import React, { Component } from 'react';
import '../App.css'
import {useEffect } from 'react'
import {connect} from 'react-redux'
import { fetchAlbums } from '../actions'
import { fetchAlbumsRequest } from '../actions';
import { useSelector, useDispatch } from 'react-redux'
const axios = require('axios');

function Albums({fetchAlbums}){

    useEffect(() =>{
        fetchAlbums()
    },[])

 
        return ( 
            <React.Fragment>
                {/* <div className="albums-list">
                    {this.state.albumsData.map(album=>{
                        return (<div className="album" key={album.id} onClick={()=>this.goToPhotos(album.id)}>
                            <h2>{album.title}</h2>
                        </div>)
                    })}
                </div> */}
            </React.Fragment>
         );
}

const mapStateToProps = state =>{
    return {
        albums: state.albums
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchAlbums:() => dispatch(fetchAlbums())
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Albums);