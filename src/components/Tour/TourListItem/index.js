import PropTypes from "prop-types";
import * as Style from "./styled";
import { Col, Row, Container } from "@bootstrap-styled/v4";

export default function TourListItem({ tour: { title, excerpt, image } }) {
  return (
    <Style.Tour>
      <Style.ToursImageContainer>
        <Style.ToursImage alt={title} src={image} height={285} />
      </Style.ToursImageContainer>
      <Style.TourTitle>{title}</Style.TourTitle>
      <Style.TourResume>{excerpt}</Style.TourResume>
      <Row>
        <Col xs="12" sm="6"></Col>
        <Col xs="12" sm="6"></Col>
      </Row>
      <Style.TourChart>
        <Style.StyledTime />
      </Style.TourChart>
    </Style.Tour>
  );
}

TourListItem.propTypes = {
  tour: PropTypes.shape({
    title: PropTypes.string,
    excerpt: PropTypes.string,
    image: PropTypes.any
  })
};
