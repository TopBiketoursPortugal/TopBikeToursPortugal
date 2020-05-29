import React from "react";
import PropTypes from "prop-types";
import Banners from "../../components/Banners";

const BannerPreview = ({ entry }) => {
  var banner = entry.getIn(["data", "title"]);
  return <Banners banners={[banner]} />;
};

BannerPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BannerPreview;
