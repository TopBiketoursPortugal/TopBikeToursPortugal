import React from "react";
import PropTypes from "prop-types";

const Package = ({ data }) => {
  // console.log(JSON.stringify(data));

  return (
    <div className="pt-col">
      <div className={"pt-block" + (data.bestValue ? " pt-selected" : "")}>
        <div className="pt-back"></div>
        <div className="pt-title">{data.packageName}</div>
        <div className="pt-price-block">
          <span className="pt-price-main">{data.price}</span>
          <span className="pt-price-rest">
            <span className="pt-currency">€</span>
            {/* <br />
            <span className="pt-sub">/wk</span> */}
          </span>
        </div>
        <div className="pt-list">
          {data &&
            data.packageContents &&
            (data.packageContents || []).map((pc, index) => (
              <PackageItem key={"pi" + index} {...pc} />
            ))}
        </div>
      </div>
    </div>
  );
};

const PackageItem = ({ title, value, icon }) => (
  <div className="pt-list-item">
    <div className="pt-text">
      {title}
      {/* <span className="pt-tooltip-show-icon">
        <span className="pt-tooltip-show">
          <i className="fa fa-info-circle"></i>
        </span>
        <span className="pt-tooltip">
          <span className="pt-tooltip-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae commodo quam, non auctor dui. Quisque at ipsum at lorem
            accumsan viverra quis maximus eros.
          </span>
        </span>
      </span> */}
    </div>
    <div className="pt-value">{value || icon || `-`}</div>
  </div>
);

Package.propTypes = {
  data: PropTypes.shape({
    packageName: PropTypes.string,
    bestValue: PropTypes.bool,
    packageContents: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        value: PropTypes.string,
        icon: PropTypes.string
      })
    )
  })
};

export default Package;
