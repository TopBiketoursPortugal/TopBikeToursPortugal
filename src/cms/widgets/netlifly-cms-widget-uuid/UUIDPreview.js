import React from 'react';
import PropTypes from 'prop-types';
import { WidgetPreviewContainer } from 'netlify-cms-ui-default';

const UUIDPreview = ({ value }) => <WidgetPreviewContainer>{value}</WidgetPreviewContainer>;

UUIDPreview.propTypes = {
  value: PropTypes.string,
};

export default UUIDPreview;