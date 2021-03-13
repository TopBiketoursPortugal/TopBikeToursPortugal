import React from "react";
// import './Logo.css'
// import languages from "../data/languages";
import { Link } from "gatsby";
// import FlagIconFactory from "react-flag-icon-css";
import { StaticImage } from "gatsby-plugin-image";
import "./LanguageSwitcher.scss";

const LanguageSwitcher = ({ language, languageAlternateLinks }) => (
  <>
    {/* {languages.langs.map(language => (
      <Link to={"/" + languages.defaultLangKey !== language ? language : ""}>{languages.Display}</Link>
    ))} */}
    <Link to="/" alt="English">
      {/* <FlagIcon code={props.code} size={props.size} /> */}
      {/* <span code="gb" className="flag-icon flag-icon-gb" /> */}
      <StaticImage
        src="../../static/icons/united-kingdom-flag-icon-32.png"
        className="flag-icon"
        alt="English"
        placeholder="none"
        layout="fixed"
        width={32}
        height={16}
      />
    </Link>
    <Link to="/pt/" alt="Português">
      {/* <FlagIcon code={props.code} size={props.size} /> */}
      {/* <span code="pt" className="flag-icon flag-icon-pt" /> */}
      <StaticImage
        className="flag-icon"
        src="../../static/icons/portugal-flag-icon-32.png"
        alt="Português"
        placeholder="none"
        layout="fixed"
        width={32}
        height={21}
      />
    </Link>
  </>
);

// const FlagIcon = FlagIconFactory(React, { useCssModules: false });

export default LanguageSwitcher;
