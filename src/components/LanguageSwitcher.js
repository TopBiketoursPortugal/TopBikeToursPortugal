import React from "react";
// import './Logo.css'
// import languages from "../data/languages";
import { Link } from "gatsby";
// import FlagIconFactory from "react-flag-icon-css";

import "./LanguageSwitcher.scss";

const LanguageSwitcher = ({ language, languageAlternateLinks }) => (
  <>
    {/* {languages.langs.map(language => (
      <Link to={"/" + languages.defaultLangKey !== language ? language : ""}>{languages.Display}</Link>
    ))} */}
    <Link to="/" alt="English">
      {/* <FlagIcon code={props.code} size={props.size} /> */}
      <span code="gb" className="flag-icon flag-icon-gb" />
    </Link>
    <Link to="/pt/" alt="Português">
      {/* <FlagIcon code={props.code} size={props.size} /> */}
      <span code="pt" className="flag-icon flag-icon-pt" />
    </Link>
  </>
);

// const FlagIcon = FlagIconFactory(React, { useCssModules: false });

export default LanguageSwitcher;
