import React from "react";
import PropTypes from "prop-types";
import { WidgetPreviewContainer } from "netlify-cms-ui-default";

const ColorPickerPreview = ({ value }) => (
  <WidgetPreviewContainer>{value}</WidgetPreviewContainer>
);

ColorPickerPreview.propTypes = {
  value: PropTypes.string
};

export default ColorPickerPreview;
