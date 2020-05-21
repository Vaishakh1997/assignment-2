import React, { lazy } from 'react'
import '../App.css'

function Carousel({images}){
    
    const transitionPercentage = 100/images.length
    const length = images.length

    let transitionArray = images.map((image, index) => {
        return `${transitionPercentage * (index)}%  { transform: translateX(-${100*index}%)}` 
    })

    let slide = `@keyframes slide {
        ${transitionArray.join('')}
    }`

    let style = {
        minWidth: '100%',
        height: '100%',
        overflowY: 'hidden',
        animation: `slide ${length*2}s linear infinite`,
    }

    let imageSlider = images.map((image, index) => {
            return (
                <div key={index} className="slide" style={style} key={index}>
                    <style>{slide}</style>
                    <img style={{width:'100%',height:'100%', cursor:'pointer'}} src={image.url} alt={index}></img>
                </div>
            )
        })

        return (
            <div className="slider">{imageSlider}</div>
        )
    }
    
export default Carousel;