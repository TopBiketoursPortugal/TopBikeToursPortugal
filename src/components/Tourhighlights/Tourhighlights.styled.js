import styled from "styled-components"
import { Time } from '@styled-icons/boxicons-regular/Time'

// export const SameHeightColumn = styled(Col)`
//     display: flex;
// `

export const Tours = styled.div`
`

export const Tour = styled.article`
    flex: 1;
    box-shadow: 0 1px 3px rgba(0,0,0,.08);
    background-color: #fff;
    border-radius: 4px;
    perpective: 1000px;
    margin: 25px 0;
    &:hover{
        cursor:pointer;
        img {
            transform: scale(1.05);
        }
    }
`
export const TourHeaderTitle = styled.h2`
    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    text-align: center;
    margin: 5px 0;
    font-size: 2rem;
    padding:20px;
`


export const TourTitle = styled.h2`

    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    text-align: center;
    margin: 5px 0;
    font-size: 1.3rem;
    padding:20px;

`

export const TourResume = styled.p`
    font-size: 1.15rem;
    font-family: Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding:20px;

    `
export const TourChart = styled.p`
    padding:20px;

`

export const ToursImageContainer = styled.div`
    overflow:hidden;
    height: 285px;
`

export const ToursImage = styled.img`
    width:100%;
    transition: all .2s ease-out;
`

export const Subtitle = styled.p`
    text-align: center;
    position: relative;
    margin-bottom: 30px;
    padding: 30px;
    text-align: left;
    font-size: 1.2rem;
    text-align:center;

`



export const Title = styled.h3`
    margin-top: 30px;
    text-align: center;
    position: relative;
`

export const StyledTime = styled(Time)`
    width:20px;
`