import React from "react";
import PropTypes from "prop-types";

import ModulePageVideoItem from "./ModulePageVideo";

const ModulePageContent = props => {
  return (
    <div className="container mt-4 h-100">
      <div className="row">
        <div className="col-sm-6">
          <h1>Module {props.modNumber}</h1>
          <br />
          <p>{props.description}</p>
        </div>
      </div>
      <hr />
      {props.videos.map((data, index) => (
        <ModulePageVideoItem data={data} modSlug={props.slug} key={index} index={index} />
      ))}
    </div>
  );
};

ModulePageContent.propTypes = {
  description: PropTypes.string.isRequired,
  modNumber: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  videos: PropTypes.array
};

export default ModulePageContent;
