import React, { Component } from 'react';
import '../App.css'
const axios = require('axios');

class Albums extends Component {
    state = { 
        albumsData:[]
     }

    goToPhotos = (albumId) => {
        this.props.history.push(`/albums/${albumId}`)
    }

    componentDidMount(){
        axios({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/albums`
          })
            .then(response=> this.setState({albumsData:response.data}))
            .catch(error=> console.error(error))
    }
    
    render() { 
        return ( 
            <React.Fragment>
                <div className="albums-list">
                    {this.state.albumsData.map(album=>{
                        return (<div className="album" key={album.id} onClick={()=>this.goToPhotos(album.id)}>
                            <h2>{album.title}</h2>
                        </div>)
                    })}
                </div>
            </React.Fragment>
         );
    }
}
 
export default Albums;