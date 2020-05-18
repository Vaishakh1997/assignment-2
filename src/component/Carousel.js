import React from 'react'
import '../App.css'
import store from '../store'
import { keyframes, css } from 'styled-components'

function Carousel({images}){
    const totalImages = 100/images.length

    let totalTansition = images.map((image, index) => {
        return `${totalImages * index}%  { transform: translateX(-${100*index}%)}` 
    })

    let slideShow = keyframes`
    ${totalTansition} 100s ease-out 1s infinite
    `

    // const animation = css`animation: ${slideShow} 100s ease-out 1s infinite`

        let imageSlider = images.map((image, index) => {
            return (
                <div key={index} className="slide" style={{ animation: {slideShow}}} key={index}>
                    <img style={{width:'100%',height:'100%'}} src={image} alt="1"></img>
                </div>
            )
        })
        console.log(slideShow)


        return (
            <div className="slider">{imageSlider}</div>
        )
    }
export default Carousel;