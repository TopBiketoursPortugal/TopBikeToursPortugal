import React from "react";
import PropTypes from "prop-types";
import showdown from "showdown";

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

export const HTMLMarkdownContent = ({ content, className }) => {
  const converter = new showdown.Converter();

  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }} />
  );
};

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
