import React from "react";
import Img from "gatsby-image";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext
// } from "pure-react-carousel";

import ReadMore from "../ReadMore";
import "./team.scss";

export const TeamMember = ({ image, name, role, bio }) => (
  <div className="team">
    <div className="image">
      <Img fluid={image.childImageSharp.fluid} alt={name} />
    </div>
    <div className="detail">
      <h3 className="name">{name}</h3>
      <h4 className="role">{role}</h4>
      <div className="divider"></div>
      <ReadMore>{bio}</ReadMore>
    </div>
  </div>
);

export const TeamListComponent = ({ team }) => (
  <div className="teamList">
    <h2>Our Team</h2>
    <div className="row">
      {team &&
        team.map((teamMember, index) => (
          <div key={`t` + index} className="col-12 col-sm-4">
            <TeamMember {...teamMember} />
          </div>
        ))}
      {/* {team &&
            groupArr(team, 3).map((teamGroup, gindex) => (
              <div>
                {teamGroup && teamGroup.map((teamMember, index) => (
                  <div className="col-12 col-sm-4">
                    <TeamMember key={`t` + index} {...teamMember} />
                  </div>
                ))}
              </div>
            ))} */}
    </div>
  </div>
);

// function groupArr(data, n) {
//   var group = [];
//   for (var i = 0, j = 0; i < data.length; i++) {
//     if (i >= n && i % n === 0) j++;
//     group[j] = group[j] || [];
//     group[j].push(data[i]);
//   }
//   return group;
// }
