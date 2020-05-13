import React, { Component } from 'react';
const axios = require('axios');
class Photos extends Component {
    state = {
        imageURL: '',
        allImageURL: [],
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/photos?albumId=${this.props.match.params.albumId}`
        })
            .then(response => {
                var allImageURL = []
                response.data.map(photo => allImageURL.push(photo.url))
                this.setState({allImageURL: allImageURL })
            })
            .catch(error => console.error(error))
    }

    prevSlide = () => {
        let targetID;
        if(this.props.location.hash)
            targetID = this.props.location.hash
        else
            targetID = "#1"
        while (targetID.charAt(0) === '#')
            targetID = targetID.slice(1);
        if(targetID !== "1")
            targetID = parseInt(targetID)-1
        this.props.history.push(`#${targetID}`)
        window.location = `/albums/${this.props.match.params.albumId}#${targetID}`
    }

    nextSlide = () => {
        let targetID;
        if(this.props.location.hash)
            targetID = this.props.location.hash
        else
            targetID = "#1"
        while (targetID.charAt(0) === '#')
            targetID = targetID.slice(1);
        targetID = parseInt(targetID)+1
        this.props.history.push(`#${targetID}`)
        window.location = `/albums/${this.props.match.params.albumId}#${targetID}`
    }
    
    render() {
        let prev="<"
        let next=">"

        return (
            <React.Fragment>
                <div className="Photos-list">
                    <button className="prev" onClick={this.prevSlide}>
                        {prev}
                    </button>

                    <div className="slider">
                        <div className="slides">
                            {this.state.allImageURL.map((url, index) => {
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

                        {this.state.allImageURL.map((url, index) => {
                            let targetID = `#${index + 1}`;
                            return (
                                <a href={targetID} key={targetID}></a>
                            );
                        })}
                    </div>

                    <button className="next" onClick={this.nextSlide}>
                        {next}
                    </button>
                </div>
            </React.Fragment>
        );
    }
}

export default Photos;