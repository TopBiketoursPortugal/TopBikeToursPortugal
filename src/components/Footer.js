import React from "react";
import styled from "styled-components";
import { Col } from "@bootstrap-styled/v4";
import { Row } from "@bootstrap-styled/v4";
import { Container } from "@bootstrap-styled/v4";
// import img1 from "./../img/banners/1.jpg";
import { Link } from "gatsby";
import "./Footer.scss";

const FooterContainer = styled.footer`
  position: relative;
  background-color: #2b2b2b;
  color: #999;
  font-size: 12px;
  padding-top: 30px;
`;

const FooterContentContainer = styled.div`
  margin-bottom: 35px;
  font-size: 12px;
`;
const FooterContentTitle = styled.h4`
  font-size: 15px;
  color: #ccc;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

const FooterContentText = styled.p`
  outline: none !important;
  margin: 0 0 10px;
`;

// const FooterPostContainer = styled.div`
//   display: flex;
// `;

// const FooterPostImg = styled.img`
//   width: 40%;
//   align-self: baseline;
// `;

// const FooterPostSummary = styled.div`
//   outline: none !important;
//   margin-left: 10px;
// `;

export default class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <Container>
          <Row>
            <Col xs="12" md="8">
              <FooterContentContainer>
                <FooterContentTitle>About Us</FooterContentTitle>
                <FooterContentText>
                  Founded in 2013, Top Bike tours Portugal is a company with
                  experience in pedestrian and cycling tours in the city of
                  Porto and long distance cycling routes to the north of the
                  Iberian Peninsula and all around Portugal.
                </FooterContentText>
              </FooterContentContainer>
            </Col>
            <Col xs="12" md="4">
              <FooterContentContainer>
                <FooterContentTitle>Contact Info</FooterContentTitle>
                <FooterContentText>
                  Rua Alferes Malheiro nº 139
                  <br />
                  4000-057 Porto
                  <br />
                  Portugal
                  <br />
                  <br />
                  300 m of Trindade Metro, near Oporto City Hall
                </FooterContentText>
                <FooterContentText>
                  Tel: (+351) 220 997 106
                  <br />
                  ​Telm: (+351) 915 316 999​
                  <br />
                  <br />
                  email: info@topbiketoursportugal.com
                </FooterContentText>
              </FooterContentContainer>
              <FooterContentContainer></FooterContentContainer>
            </Col>
          </Row>
        </Container>
        <div className="terms text-center">
          @ Top Bike tours portugal 2019 -{" "}
          <Link to="/terms-and-conditions/">Terms and conditions</Link> -{" "}
          <Link to="/privacy-policy/">Privacy policy</Link>
        </div>
      </FooterContainer>
    );
  }
}
