import React, { Component } from "react";
import PropTypes from "prop-types";
const uuidv4 = require("uuid/v4");
// const validate = require("uuid-validate");

export default class UUIDControl extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.string//,
    // classNameWrapper: PropTypes.string.isRequired,
    // setActiveStyle: PropTypes.func.isRequired,
    // setInactiveStyle: PropTypes.func.isRequired
  };

  static defaultProps = {
    value: ""
  };

  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper
    } = this.props;

    return (
      <input
        readOnly={true}
        type="text"
        id={forID}
        className={classNameWrapper}
        value={value || uuidv4()}
        onChange={e => onChange(e.target.value)}
      />

      // onFocus={setActiveStyle}
      // onBlur={setInactiveStyle}
    );
  }
}
