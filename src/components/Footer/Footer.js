import React from 'react'
import { Link } from 'gatsby'
import './Footer.scss'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footerContainer md:max-w-2xl">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <h4 class="title">About Us</h4>
            <p>
              Founded in 2013, Top Bike tours Portugal is a company with
              experience in pedestrian and cycling tours in the city of Porto
              and long distance cycling routes to the north of the Iberian
              Peninsula and all around Portugal.
            </p>
          </div>
          <div>
            <p>Contact Info</p>
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
        <div className="terms text-center">
          @ Top Bike Tours Portugal 2019 -{' '}
          <Link to="/terms-and-conditions/">Terms and conditions</Link> -{' '}
          <Link to="/privacy-policy/">Privacy policy</Link>
        </div>
      </footer>
    )
  }
}
