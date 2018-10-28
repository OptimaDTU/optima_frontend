import React from "react";
import { Link } from "react-router-dom";

const ModulePageVideoItem = props => {
  const { modSlug, data, index } = props;
  const linkStyle = {
    color: "inherit",
    textDecoration: "none"
  };

  return (
    <React.Fragment>
      <div className="row mt-3 mb-3">
        <div className="col-sm-1 align-self-center d-none d-sm-block">
          {index + 1}.
        </div>
        <div className="col-sm-2">
          <Link to={`/module/${modSlug}/video/${data.slug}`} style={linkStyle}>
            <img
              src={data.thumbnail}
              className="img-thumbnail p-0"
              alt={data.title}
            />
          </Link>
        </div>
        <div className="col-sm-6 align-self-center">
          <p className="p-1">{data.description}</p>
        </div>
        <div className="col-sm-3 border-left border-dark">
          {data.resources.map((resource, resindex) => (
            <a
              className="btn btn-outline-primary btn-sm m-2"
              href={resource.url}
              target="_blank"
              key={resindex}
            >
              {resource.title}
            </a>
          ))}
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default ModulePageVideoItem;
