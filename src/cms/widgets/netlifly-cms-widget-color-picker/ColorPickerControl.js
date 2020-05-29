import React, { Component } from "react";
import PropTypes from "prop-types";
import { SketchPicker } from "react-color";

export default class ColorPickerControl extends Component {
  state = {
    displayColorPicker: false,
    color: {
      r: "241",
      g: "112",
      b: "19",
      a: "1"
    }
  };

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.string,
    classNameWrapper: PropTypes.string.isRequired,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired
  };

  static defaultProps = {
    value: "#fff"
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color, onChange) => {
    this.setState({ color: color.rgb });
    onChange(color.hex);
  };

  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle
    } = this.props;

    return (
      // <input
      //   readOnly={true}
      //   type="text"
      //   id={forID}
      //   className={classNameWrapper}
      //   value={value || uuidv4()}
      //   onChange={e => onChange(e.target.value)}

      // />

      <SketchPicker
        id={forID}
        className={classNameWrapper}
        color={value}
        onChange={e => this.handleChange(e, onChange)}
      />
      
      // onChangeComplete={this.handleChangeComplete}

      // onFocus={setActiveStyle}
      // onBlur={setInactiveStyle}
    );
  }
}
