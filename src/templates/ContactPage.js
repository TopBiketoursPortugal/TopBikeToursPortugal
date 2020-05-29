import React from "react";
import { MapPin, Smartphone, Mail } from "react-feather";
import { graphql } from "gatsby";

// import PageHeader from "../components/PageHeader";
import { HTMLContent } from "../components/Content";
// import FormSimpleAjax from "../components/FormSimpleAjax";
// import Content from "../components/Content";
import GoogleMap from "../components/GoogleMap";
import Layout from "../layout/LayoutBootstrap";
import "./ContactPage.scss";

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
  body,
  title,
  subtitle,
  // featuredImage,
  address,
  email,
  location,
  phone,
  mobile,
  googleApiKey,
}) => (
  <main className="Contact">
    {/* <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    /> */}
    <section className="section Contact--Section1">
      <div className="container Contact--Section1--Container">
        <div>
          {title && <h1>{title}</h1>}
          {subtitle && <h2>{subtitle}</h2>}
          <HTMLContent content={body} />
          <div className="Contact--Details">
            {address && address.street && (
              <a
                className="Contact--Details--Item"
                href={`https://www.google.pt/maps/search/${encodeURI(
                  address.street
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin /> {address.street}
                {address.postalCode &&
                  `, ${address.postalCode}, ${address.city}, ${address.country}`}
              </a>
            )}
            {phone && (
              <a className="Contact--Details--Item" href={`tel:${phone}`}>
                <Smartphone /> {phone}
              </a>
            )}
            {mobile && (
              <a className="Contact--Details--Item" href={`tel:${mobile}`}>
                <Smartphone /> {mobile}
              </a>
            )}
            {email && (
              <a className="Contact--Details--Item" href={`mailto:${email}`}>
                <Mail /> {email}
              </a>
            )}
          </div>
        </div>

        <div className="tour-booking-form">
          <form
            action="https://formspree.io/xlewykra"
            method="POST"
            className="tour-booking-enquiry-form tour-booking-form-field tour-booking-with-border"
            id="tour-booking-enquiry-form"
          >
            <div className="tour-booking-enquiry-field tour-booking-enquiry-field-full-name tour-booking-type-text">
              <div className="tour-booking-head">
                Name<span className="tour-booking-req">*</span>
              </div>
              <div className="tour-booking-tail">
                <input type="text" name="full-name" required />
              </div>
            </div>

            <div className="tour-booking-enquiry-field tour-booking-enquiry-field-full-name tour-booking-type-text">
              <div className="tour-booking-head">Country</div>
              <div className="tour-booking-tail">
                <input type="text" name="country" />
              </div>
            </div>
            <div className="tour-booking-enquiry-field tour-booking-enquiry-field-email-address tour-booking-type-email">
              <div className="tour-booking-head">
                Email Address<span className="tour-booking-req">*</span>
              </div>
              <div className="tour-booking-tail">
                <input type="email" name="email-address" required />
              </div>
            </div>
            {/* <div className="tour-booking-enquiry-field tour-booking-enquiry-field-full-name tour-booking-type-text">
                    <div className="tour-booking-head">Phone</div>
                    <div className="tour-booking-tail">
                      <input type="text" name="phone" />
                    </div>
                  </div> */}
            <div className="tour-booking-enquiry-field tour-booking-enquiry-field-full-name tour-booking-type-text">
              <div className="tour-booking-head">Where did you find us?</div>
              <div className="tour-booking-tail">
                <input type="text" name="found" />
              </div>
            </div>
            <div className="form-group">
              <div className="tour-booking-head">Tour Type</div>
              <div className="tour-booking-tail">
                <div className="tour-booking-combobox-wrap">
                  <select
                    name="package"
                    data-required=""
                    className="form-control"
                    defaultValue=""
                  >
                    <option value="">-</option>
                    <option value="Guided">Guided</option>
                    <option value="Unguided">Unguided</option>
                  </select>
                </div>
              </div>
            </div>
            {/* <div className="tour-booking-enquiry-field tour-booking-enquiry-field-travel-date tour-booking-type-datepicker">
                    <div className="tour-booking-head">
                      Travel Date<span className="tour-booking-req">*</span>
                    </div>
                    <div className="tour-booking-tail">
                      <input
                        type="text"
                        className="tour-booking-datepicker hasDatepicker"
                        name="travel-date"
                        value=""
                        id="dp1573393342902"
                      />
                      <i className="fa fa-calendar"></i>
                    </div>
                  </div> */}
            <div className="form-group">
              <div className="tour-booking-head">Person</div>
              <div className="tour-booking-tail">
                <div className="tour-booking-combobox-wrap">
                  <select
                    name="person"
                    data-required=""
                    className="form-control"
                    defaultValue=""
                  >
                    <option value="">-</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="tour-booking-enquiry-field tour-booking-enquiry-field-your-enquiry tour-booking-type-textarea">
              <div className="tour-booking-head">
                Your Enquiry<span className="tour-booking-req">*</span>
              </div>
              <div className="tour-booking-tail">
                <textarea name="your-enquiry" required></textarea>
              </div>
            </div>
            <div className="tour-booking-enquiry-term">
              <input
                type="checkbox"
                name="tour-booking-require-acceptance"
                required
              />
              *{" "}
              <a href="#" target="_blank">
                Terms and conditions
              </a>{" "}
              and{" "}
              <a href="#" target="_blank">
                Privacy policy
              </a>
              .
            </div>
            <div className="tour-booking-enquiry-form-message"></div>
            <input
              type="submit"
              className="btn btn-primary tour-booking-button"
              value="Submit Enquiry"
            />
          </form>
        </div>
      </div>
    </section>

    {location && (
      <GoogleMap center={location} location={location} mapkey={googleApiKey} />
    )}
  </main>
);

const ContactPage = ({ data: { page, settings } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
    feature={page.frontmatter.feature}
    language={page.frontmatter.language}
  >
    <ContactPageTemplate
      {...settings}
      {...settings[page.language || "en"]}
      {...page.frontmatter}
      body={page.html}
    />
  </Layout>
);

export default ContactPage;

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    settings: settingsYaml {
      googleTrackingId
      googleApiKey
      siteUrl
      mobile
      phone
      email
      location {
        lat
        lng
      }
      tourOperator
      travelAgency
      socialNetworks {
        display
        icon
        link
      }
      pt {
        address {
          city
          country
          hint
          postalCode
          street
        }
      }
      en {
        address {
          city
          country
          hint
          postalCode
          street
        }
      }
    }
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...FeatureImage
      html
      frontmatter {
        title
        templateKey
        language
        subtitle
        featuredImage {
          childImageSharp {
            fluid(quality: 85, maxWidth: 1444) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;
