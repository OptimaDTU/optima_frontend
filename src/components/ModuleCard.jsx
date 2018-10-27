import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ModuleCard = props => {
  const linkStyle = {
    color: "inherit",
    textDecoration: "none"
  };

  return (
    <div className="col-sm-3 text-center ModuleCard">
      <Link to={`/module/${props.slug}`} style={linkStyle}>
        <div className="card h-100">
          <img
            className="card-img-top img-thumbnail h-50"
            src={props.imageUrl}
            alt={props.moduleNumber}
          />
          <div className="card-body">
            <p className="card-text">{props.data}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

ModuleCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  moduleNumber: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired
};

export default ModuleCard;
