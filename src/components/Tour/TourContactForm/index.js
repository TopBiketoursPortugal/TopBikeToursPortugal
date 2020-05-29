// import React from "react";
// import { navigate } from "gatsby";
// import Recaptcha from "react-google-recaptcha";

// const RECAPTCHA_KEY = process.env.GATSBY_APP_SITE_RECAPTCHA_KEY;
// if (typeof RECAPTCHA_KEY === "undefined") {
//   throw new Error(`
//   Env var GATSBY_APP_SITE_RECAPTCHA_KEY is undefined! 
//   You probably forget to set it in your Netlify build environment variables. 
//   Make sure to get a Recaptcha key at https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings
//   Note this demo is specifically for Recaptcha v2
//   `);
// }

// function encode(data) {
//   return Object.keys(data)
//     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// }

// export default function TourContactForm() {
//   const [state, setState] = React.useState({});
//   const recaptchaRef = React.createRef();

//   const handleChange = (e) => {
//     setState({ ...state, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const recaptchaValue = recaptchaRef.current.getValue();
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: encode({
//         "form-name": form.getAttribute("name"),
//         "g-recaptcha-response": recaptchaValue,
//         ...state,
//       }),
//     })
//       .then(() => navigate(form.getAttribute("action")))
//       .catch((error) => alert(error));
//   };

//   return (
//     <form
//       method="POST"
//       data-netlify="true"
//       data-netlify-recaptcha="true"
//       data-netlify-honeypot="bot-field"
//       className="tour-booking-enquiry-form tour-booking-form-field tour-booking-with-border"
//       name="tour-booking-enquiry-form"
//       id="tour-booking-enquiry-form"
//       onSubmit={handleSubmit}
//     >
//       <noscript>
//         <p>This form won’t work with Javascript disabled</p>
//       </noscript>
//       <input type="hidden" name="form-name" value="tour-booking-enquiry-form" />
//       <div className="d-none tour-booking-enquiry-field tour-booking-enquiry-field-full-name tour-booking-type-text">
//         <div className="tour-booking-head">
//           Don’t fill this out if you're human
//         </div>
//         <div className="tour-booking-tail">
//           <input name="bot-field" />
//         </div>
//       </div>
//       <input type="hidden" name="product-code" value={tour.productcode} />
//       <input type="hidden" name="product-title" value={tour.title} />

//       <div className="tour-booking-enquiry-field tour-booking-enquiry-field-full-name tour-booking-type-text">
//         <div className="tour-booking-head">
//           Name<span className="tour-booking-req">*</span>
//         </div>
//         <div className="tour-booking-tail">
//           <input
//             type="text"
//             name="full-name"
//             required
//             onChange={handleChange}
//           />
//         </div>
//       </div>

//       <div className="tour-booking-enquiry-field tour-booking-enquiry-field-full-name tour-booking-type-text">
//         <div className="tour-booking-head">Country</div>
//         <div className="tour-booking-tail">
//           <input type="text" name="country" onChange={handleChange} />
//         </div>
//       </div>
//       <div className="tour-booking-enquiry-field tour-booking-enquiry-field-email-address tour-booking-type-email">
//         <div className="tour-booking-head">
//           Email Address<span className="tour-booking-req">*</span>
//         </div>
//         <div className="tour-booking-tail">
//           <input
//             type="email"
//             name="email-address"
//             required
//             onChange={handleChange}
//           />
//         </div>
//       </div>
//       <div className="tour-booking-enquiry-field tour-booking-enquiry-field-phone-address tour-booking-type-phone">
//         <div className="tour-booking-head">
//           Phone<span className="tour-booking-req">*</span>
//         </div>
//         <div className="tour-booking-tail">
//           <input type="phone" name="tel" onChange={handleChange} />
//         </div>
//       </div>
//       <div className="tour-booking-enquiry-field tour-booking-enquiry-field-date-address tour-booking-type-date">
//         <div className="tour-booking-head">
//           Tour date<span className="tour-booking-req">*</span>
//         </div>
//         <div className="tour-booking-tail">
//           <input
//             type="date"
//             name="tour-date"
//             required
//             onChange={handleChange}
//           />
//         </div>
//       </div>
//       {/* <div className="tour-booking-enquiry-field tour-booking-enquiry-field-full-name tour-booking-type-text">
//                     <div className="tour-booking-head">Phone</div>
//                     <div className="tour-booking-tail">
//                       <input type="text" name="phone" />
//                     </div>
//                   </div> */}
//       <div className="tour-booking-enquiry-field tour-booking-enquiry-field-full-name tour-booking-type-text">
//         <div className="tour-booking-head">Where did you find us?</div>
//         <div className="tour-booking-tail">
//           <input type="text" name="found" onChange={handleChange} />
//         </div>
//       </div>
//       <div className="form-group">
//         <div className="tour-booking-head">Tour Type</div>
//         <div className="tour-booking-tail">
//           <div className="tour-booking-combobox-wrap">
//             <select
//               name="package"
//               data-required=""
//               className="form-control"
//               defaultValue=""
//               onChange={handleChange}
//             >
//               <option value="">-</option>
//               <option value="Guided">Guided</option>
//               <option value="Unguided">Unguided</option>
//             </select>
//           </div>
//         </div>
//       </div>
//       {/* <div className="tour-booking-enquiry-field tour-booking-enquiry-field-travel-date tour-booking-type-datepicker">
//                     <div className="tour-booking-head">
//                       Travel Date<span className="tour-booking-req">*</span>
//                     </div>
//                     <div className="tour-booking-tail">
//                       <input
//                         type="text"
//                         className="tour-booking-datepicker hasDatepicker"
//                         name="travel-date"
//                         value=""
//                         id="dp1573393342902"
//                       />
//                       <i className="fa fa-calendar"></i>
//                     </div>
//                   </div> */}
//       <div className="form-group">
//         <div className="tour-booking-head">Person</div>
//         <div className="tour-booking-tail">
//           <div className="tour-booking-combobox-wrap">
//             <select
//               name="person"
//               data-required=""
//               className="form-control"
//               defaultValue=""
//               onChange={handleChange}
//             >
//               <option value="">-</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//               <option value="5">5</option>
//               <option value="6">6</option>
//               <option value="7">7</option>
//               <option value="8">8</option>
//               <option value="9">9</option>
//               <option value="10">10</option>
//             </select>
//           </div>
//         </div>
//       </div>
//       <div className="tour-booking-enquiry-field tour-booking-enquiry-field-your-enquiry tour-booking-type-textarea">
//         <div className="tour-booking-head">
//           Your Enquiry<span className="tour-booking-req">*</span>
//         </div>
//         <div className="tour-booking-tail">
//           <textarea
//             name="your-enquiry"
//             required
//             onChange={handleChange}
//           ></textarea>
//         </div>
//       </div>
//       <div className="tour-booking-enquiry-term">
//         <input
//           type="checkbox"
//           name="tour-booking-require-acceptance"
//           onChange={handleChange}
//         />
//         *{" "}
//         <a href="#" target="_blank">
//           Terms and conditions
//         </a>{" "}
//         and{" "}
//         <a href="#" target="_blank">
//           Privacy policy
//         </a>
//         .
//       </div>
//       <div className="tour-booking-enquiry-form-message"></div>

//       <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} />

//       <input
//         type="submit"
//         className="btn btn-primary tour-booking-button"
//         value="Submit Enquiry"
//       />
//     </form>
//   );
// }
