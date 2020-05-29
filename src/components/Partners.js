import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'
// import Slider from 'react-animated-slider';
import styled from "styled-components"
// import BackgroundImage from 'gatsby-background-image'


const Title=styled.h2`
    text-align: center;
    position: relative;
`

const Subtitle=styled.p`
    text-align: center;
    position: relative;
`

const Partner=styled.div`

`

export default class Partners extends React.Component {
    render() {
        return (
            <div>
                <Title>PARTNER</Title>
                <Subtitle>People who always support and endorse our good work</Subtitle>
                <div>
                    <Partner></Partner>
                </div>
            </div>
        )
    }
}
