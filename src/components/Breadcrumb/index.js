import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
// import { pure } from "recompose";

function Breadcrumb({ routes }) {
  return (<></>
    // <nav aria-label="breadcrumb">
    //   <ol className="breadcrumb">
    //     {routes.map((r, i) => (
    //       <li
    //         key={`bc_${i}`}
    //         className={`breadcrumb-item${
    //           i === routes.length - 1 ? " active" : ""
    //         }`}
    //       >
    //         <Link
    //           className="nav"
    //           to={r.url}
    //           aria-current={i === routes.length - 1 ? "page" : undefined}
    //           tex
    //         >
    //           {r.displayName}
    //         </Link>
    //       </li>
    //     ))}
    //   </ol>
    // </nav>
  );
}

Breadcrumb.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default Breadcrumb;
