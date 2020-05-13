import React, { Component } from 'react';
const axios = require('axios');

class Photos extends Component {
    state = {
        photosData: [],
        imageURL: '',
        allImageURL: []
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/photos?albumId=${this.props.match.params.albumId}`
        })
            .then(response => {
                var allImageURL = []
                response.data.map(photo => {
                    allImageURL.push(photo.url)
                })
                this.setState({ photosData: response.data, allImageURL: allImageURL })
            })
            .catch(error => {
                console.error(error)
            })
    }
  
    render() {
        return (
            <React.Fragment>
                <div className="Photos-list">
                    <div class="slider">
                        
                        <div class="slides">
                            {this.state.allImageURL.map((url, index)=>{
                                return  <div id={index+1}>
                                            <img style={{width:'100%',height:'100%'}} src={url} ></img>
                                        </div>
                            })}
                        </div>

                        {this.state.allImageURL.map((url, index)=>{
                            let targetID = `#${index+1}`
                            return <a href={targetID}>{index+1}</a>
                        })}                        
                    </div>
                    
                </div>
            </React.Fragment>
        );
    }
}

export default Photos;