import React from "react";
import { Link } from "gatsby";
import "./Footer.scss";

const Footer = () => (
  <footer className="footerContainer">
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <h4 className="title">About Us</h4>
          <p>
            Founded in 2013, Top Bike tours Portugal is a company with
            experience in pedestrian and cycling tours in the city of Porto and
            long distance cycling routes to the north of the Iberian Peninsula
            and all around Portugal.
          </p>
        </div>
        <div className="col-sm-4">
          <h4 className="title">Contact Info</h4>
          <p>
            Rua Alferes Malheiro nº 139
            <br />
            4000-057 Porto
            <br />
            Portugal
            <br />
            <br />
            300 m of Trindade Metro, near Oporto City Hall
          </p>
          <p>
            Tel: (+351) 220 997 106
            <br />
            ​Telm: (+351) 915 316 999​
            <br />
            <br />
            email: info@topbiketoursportugal.com
          </p>
        </div>
      </div>
    </div>
    <div className="terms">
      @ Top Bike Tours Portugal 2019 -{" "}
      <Link to="/terms-and-conditions/">Terms and conditions</Link> -{" "}
      <Link to="/privacy-policy/">Privacy policy</Link>
    </div>
  </footer>
);

export default Footer;
