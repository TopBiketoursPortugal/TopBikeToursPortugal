import React from "react";
import { orderBy, uniq, filter } from "lodash-es";
import showdown from "showdown";
import { HTMLContent } from "../Content";

import "./timeline.scss";
export const Timeline = ({ dates }) => {
  // console.log(JSON.stringify(dates));
  var monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  var years = uniq(dates.map(i => new Date(i.date).getFullYear())).sort(
    (a, b) => a - b
  );
  // console.log(JSON.stringify(years));

  const converter = new showdown.Converter();

  return (
    <div className="page">
      <div className="timeline">
        {years.map((year, index) => (
          <div key={`tl` + year + `_` + index} className="timeline__group">
            <span className="timeline__year">{year}</span>

            {dates &&
              orderBy(
                filter(
                  dates,
                  d =>
                    d.type === "Date" && new Date(d.date).getFullYear() === year
                ),
                ["date"],
                ["asc"]
              ).map((item, jindex) => (
                <div
                  key={`tl` + year + `_` + index + `_` + jindex}
                  className="timeline__box"
                >
                  <div className="timeline__date">
                    <span className="timeline__day">
                      {new Date(item.date).toLocaleString("pt-PT", {timeZone: "Europe/Lisbon"}).substring(0,2)}
                    </span>
                    <span className="timeline__month">
                      {monthName[new Date(item.date).getMonth()]}
                    </span>
                  </div>
                  <div className="timeline__post">
                    <div className="timeline__content">
                      <HTMLContent
                        className="container tourTitle"
                        content={converter.makeHtml(item.body)}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>

    // <div className="page">
    //   <div className="timeline">
    //     <div className="timeline__group">
    //       <span className="timeline__year">2008</span>
    //       <div className="timeline__box">
    //         <div className="timeline__date">
    //           <span className="timeline__day">2</span>
    //           <span className="timeline__month">Feb</span>
    //         </div>
    //         <div className="timeline__post">
    //           <div className="timeline__content">
    //             <p>
    //               Attends the Philadelphia Museum School of Industrial Art.
    //               Studies design with Alexey Brodovitch, art director at Harper's
    //               Bazaar, and works as his assistant.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="timeline__box">
    //         <div className="timeline__date">
    //           <span className="timeline__day">1</span>
    //           <span className="timeline__month">Sept</span>
    //         </div>
    //         <div className="timeline__post">
    //           <div className="timeline__content">
    //             <p>
    //               Started from University of Pennsylvania. This is an important
    //               stage of my career. Here I worked in the local magazine. The
    //               experience greatly affected me
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="timeline__group">
    //       <span className="timeline__year">2014</span>
    //       <div className="timeline__box">
    //         <div className="timeline__date">
    //           <span className="timeline__day">14</span>
    //           <span className="timeline__month">Jul</span>
    //         </div>
    //         <div className="timeline__post">
    //           <div className="timeline__content">
    //             <p>
    //               Travels to France, Italy, Spain, and Peru. After completing
    //               fashion editorial in Lima, prolongs stay to make portraits of
    //               local people in a daylight studio
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="timeline__group">
    //       <span className="timeline__year">2016</span>
    //       <div className="timeline__box">
    //         <div className="timeline__date">
    //           <span className="timeline__day">28</span>
    //           <span className="timeline__month">Aug</span>
    //         </div>
    //         <div className="timeline__post">
    //           <div className="timeline__content">
    //             <p>
    //               Upon moving to Brooklyn that summer, I began photographing
    //               weddings in Chicago
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
