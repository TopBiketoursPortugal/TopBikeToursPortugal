import React, { Component } from "react";
import PropTypes from "prop-types";
import Truncate from "react-truncate";
import "./readMore.scss";

class ReadMore extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      expanded: false,
      truncated: false,
    };

    this.handleTruncate = this.handleTruncate.bind(this);
    this.toggleLines = this.toggleLines.bind(this);
  }

  handleTruncate(truncated) {
    if (this.state.truncated !== truncated) {
      this.setState({
        truncated,
      });
    }
  }

  toggleLines(event) {
    event.preventDefault();

    this.setState({
      expanded: !this.state.expanded,
    });
    return false;
  }

  render() {
    const { children, more, less, lines } = this.props;

    const { expanded, truncated } = this.state;

    return (
      <div className="readMoreContainer">
        <Truncate
          lines={!expanded && lines}
          ellipsis={
            <span>
              ...
              <button
                className="moreBtn"
                onClick={this.toggleLines}
                onKeyDown={this.toggleLines}
              >
                {more}
              </button>
            </span>
          }
          onTruncate={this.handleTruncate}
        >
          {children}
        </Truncate>
        {!truncated && expanded && (
          <span>
            <button
              type="button"
              className="moreBtn"
              onClick={this.toggleLines}
              onKeyDown={this.toggleLines}
            >
              {less}
            </button>
          </span>
        )}
      </div>
    );
  }
}

ReadMore.defaultProps = {
  lines: 3,
  more: "Read more",
  less: "Show less",
};

ReadMore.propTypes = {
  children: PropTypes.node.isRequired,
  lines: PropTypes.number,
  less: PropTypes.string,
  more: PropTypes.string,
};

export default ReadMore;
