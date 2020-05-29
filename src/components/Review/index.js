import React from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";

const Review = props => {
  const review = {
    quote: {
      title:
        "We have recently completed the Silver Coast bike tour. We chose to have E Bikes but I hardly used it as virtually flat the whole way. From the first decision to do the tour we were more than happy with the communication had with Sergio. On the first morning we met Sergio in the hotel and went through the itinerary for us. We then had a bike fitting and a practice ride. This was followed by Tiago taking us on a walking tour of Porto guiding us around all the historic places of interest ending up in a local port warehouse for an explanation on the life of making Port then came the tasting. On the morning of departure Sergio rode with us out of the city and sent us on our way. All of the accommodation was 4 star and of excellent choice. The riding was flat and some small amount on roads but most on cycle ways. Interesting riding along the coast small villages large towns through fire ravaged forest beautiful beaches. Having a GPS is an advantage to help navigate some of the towns. 2nd to last day there is a challenge but once at the top of the hill amazing views both up and down the coast. We did have a problem with one of the bikes and is was no problem for Sergio to drive down and replace the bike for us. I can highly recommend Fold n Visit and like that it is a small and personal company. Thank you Sergio and Tiago it was a great experience not to be forgotten.",
      body:
        "We have recently completed the Silver Coast bike tour. We chose to have E Bikes but I hardly used it as virtually flat the whole way. From the first decision to do the tour we were more than happy with the communication had with Sergio. On the first morning we met Sergio in the hotel and went through the itinerary for us. We then had a bike fitting and a practice ride. This was followed by Tiago taking us on a walking tour of Porto guiding us around all the historic places of interest ending up in a local port warehouse for an explanation on the life of making Port then came the tasting. On the morning of departure Sergio rode with us out of the city and sent us on our way. All of the accommodation was 4 star and of excellent choice. The riding was flat and some small amount on roads but most on cycle ways. Interesting riding along the coast small villages large towns through fire ravaged forest beautiful beaches. Having a GPS is an advantage to help navigate some of the towns. 2nd to last day there is a challenge but once at the top of the hill amazing views both up and down the coast. We did have a problem with one of the bikes and is was no problem for Sergio to drive down and replace the bike for us. I can highly recommend Fold n Visit and like that it is a small and personal company. Thank you Sergio and Tiago it was a great experience not to be forgotten."
    },
    customer: {
      name: "Peter Birks",
      photo: "/img/peter_birks.jpg",
      country: "New Zeland"
    },
    tour: {
      name: "Silver Coast 5 day ride plus walking tour of Porto",
      link: ""
    },
    rating: 5,
    date: "May 2018",
    source:
      "https://www.tripadvisor.co.uk/ShowUserReviews-g189180-d4105907-r585303227-Top_Bike_tours_Portugal-Porto_Porto_District_Northern_Portugal.html"
  };
  const { quote } = review;
  return (
    <div className="container">
      <div>
        <h3>{quote}</h3>
        <div></div>
      </div>
    </div>
  );
};
