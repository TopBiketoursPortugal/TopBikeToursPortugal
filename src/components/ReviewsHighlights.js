import React from "react";
import styled from "styled-components";
// import LinesEllipsis from "react-lines-ellipsis";
import ReadMore from "./ReadMore";
import Rating from "./Rating";
import "./ReviewsHighlights.scss";
import { HTMLContent } from "./Content";

export const ReviewList = styled.div`
  display: flex;
`;

export const ReviewQuote = styled.blockquote`
  .tourTitle {
    text-align: justify;
  }
  /* width: 33%;*/
  position: relative;
  padding-left: 0.5rem;
  border-left: 0.2rem solid #4d91b3;
  font-size: 2rem;
  line-height: 1.5rem;
  font-weight: 100;
  display: flex;
  flex-direction: column;
  .quote {
    text-align: justify;
    margin-bottom: 20px;
    line-height: 2rem;
  }

  .quote.collapsed::before {
    content: '"';
    color: #4d91b3;
  }
  .quote.collapsed::after {
    content: '"';
    color: #4d91b3;
  }

  cite {
    padding: 15px 0 0 15px;
    text-align: left;
    font-size: 25px;
    justify-content: flex-end;
  }
`;

export const ReviewContainer = styled.div`
  text-align: center;
  margin: 35px 0;
`;

export const ReviewCite = styled.cite`
  padding: 20px;
  display: flex;
  span {
    padding: 15px 0 0 15px;
  }
  .rating {
    padding: 18px 0 0 10px;
  }
`;

const buildGroupedArray = (array, chunk = 10) => {
  var i,
    j,
    temparray = [];
  for (i = 0, j = array.length; i < j; i += chunk) {
    temparray.push(array.slice(i, i + chunk));
    // do whatever
  }
  return temparray;
};

const ReviewsHighlights = ({ reviews, className }) => {
  var sliderArray = buildGroupedArray(reviews, 2);
  return (
    <div className="containerReview">
      <div className="row">
        <div className="col-12">
          <h2 className="reviewTitle">What People Are Saying</h2>
        </div>
        {!!reviews &&
          reviews.map((review, index) => (
            <div key={`review` + index} className="col-12 col-sm-12  col-md-6">
              <ReviewQuote>
                <ReadMore>
                  <HTMLContent
                    className="container tourTitle"
                    content={review.html}
                  />
                </ReadMore>
                <ReviewCite>
                  <cite>{review.author.name}, </cite>
                  <span>{review.author.country}, </span>
                  <Rating className={`rating`} value={review.score} />
                </ReviewCite>
              </ReviewQuote>
            </div>
          ))}
      </div>
    </div>
  );
};

// export default class ReviewsHighlights extends React.Component {
//   render({ reviews }) {
//     return (
//       <div className="containerReview">
//         <div className="row">
//           <div className="col-12">
//             <h2 className="reviewTitle">What People Are Saying</h2>
//           </div>
//           {reviews.map((review, index) => (
//             <div key={`review` + index} className="col-12 col-md-6">
//               <ReviewQuote>
//                 <ReadMore>{review.quote}</ReadMore>
//                 <ReviewCite>
//                   <cite>{review.author.name}</cite>, {review.author.country}
//                 </ReviewCite>
//               </ReviewQuote>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
export default ReviewsHighlights;
// {
//   /* <ReviewQuote key={index}>
//             <TextTruncate
//               line={3}
//               element="div"
//               truncateText="…"
//               text={review.quote}
//               textTruncateChild={<Link to={"/reviews/" + index}>more</Link>}
//             />
//             <div>
//               <cite>{review.author}</cite>, {review.country}
//             </div>
//           </ReviewQuote> */
// }
