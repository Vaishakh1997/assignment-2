import React, { Component } from 'react';
const axios = require('axios');

class Photos extends Component {
    state = { 
        photosData: [],
        imageURL: '',
        allImageURL:[]
     }
    componentDidMount(){
        axios({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/photos?albumId=${this.props.match.params.albumId}`
          })
            .then(response=> {
                var allImageURL = []
                response.data.map(photo=>{
                    allImageURL.push(photo.url)
                })
                this.setState({photosData:response.data, allImageURL:allImageURL})
            })
            .catch(error=>{
                console.error(error)
            })
            .then(res=>{
                this.carousel()
            })
    }
    carousel = () =>{
        this.state.allImageURL.map(url=>{
            setInterval(()=>{
                this.setState({imageURL: url})
            }, 5000);
        })
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="Photos-list">
                    {/* {this.state.photosData.map(photo=>{
                        return( */}
                            <div className="photo">
                                <img style={{width:'100%',height:'100%'}} src={this.state.imageURL}></img>
                            </div>
                        {/* )
                    })} */}
                </div>
            </React.Fragment>
         );
    }
}
 
export default Photos;