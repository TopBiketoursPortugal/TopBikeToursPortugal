import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import { compose, withProps } from "recompose";
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   // Marker,
//   Polyline
// } from "react-google-maps";
// import GoogleMap from "../../GoogleMap";
// import Map from "../../leaflet";
// const { Map, TileLayer, Marker, Popup } = ReactLeaflet;

const TourPlanWrapper = styled.div`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 29px;
    border-left: 4px dotted #ff0000;
    // transform: translate(-50%);
  }
`;

const TourPlanContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 30px;
  // flex-wrap: wrap-reverse;
  // justify-content: space-around;
  align-items: stretch;
`;

const Circle = styled.div`
  border: solid 1px red;
  border-radius: 50%;
  width: 60px;
  max-width: 60px;
  min-width: 60px;
  height: 60px;
  text-align: center;
  /* vertical-align: middle; */
  display: inline-grid;
  /* align-content: center; */
  /* align-self: center; */
  align-content: center;
  background-color: red;
  color: #fff;
  margin-right: 20px;
  font-size: 1.75rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const Description = styled.div`
  font-size: 1.2rem;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const TourPlan = ({ tour: { itinerary }, googleApiKey, location }) => {
  return (
    <div className="row">
      <div className="col-12">
        <TourPlanWrapper>
          {itinerary &&
            itinerary.map((item, index) => (
              <TourPlanContainer key={`tp` + index}>
                <Circle>{item.day}</Circle>
                <div>
                  <Title>{item.title}</Title>
                  <Description>{item.description}</Description>
                </div>
              </TourPlanContainer>
            ))}
        </TourPlanWrapper>
      </div>
    </div>
  );
};

TourPlan.propsTypes = {
  tour: PropTypes.shape({
    title: PropTypes.string,
    mapUrl: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    itinerary: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string
      })
    )
  })
};

export default TourPlan;
