import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ModulePageContent = props => {
  const linkStyle = {
    color: "inherit",
    textDecoration: "none"
  };

  const videoList = (videoData, modSlug) => {
    return videoData.map((data, index) => {
      return (
        <React.Fragment key={index}>
          <div className="row mt-3 mb-3">
            <div className="col-sm-1 align-self-center d-none d-sm-block">
              {index + 1}.
            </div>
            <div className="col-sm-2">
              <Link
                to={`/module/${modSlug}/video/${data.slug}`}
                style={linkStyle}
              >
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
              {data["resources"].map((resource, index) => (
                <a
                  className="btn btn-outline-primary btn-sm m-2"
                  href={resource["url"]}
                  target="_blank"
                  key={index}
                >
                  {resource["title"]}
                </a>
              ))}
            </div>
          </div>
          {/*<div className="row d-block d-sm-none"><br /></div>*/}
          <hr />
        </React.Fragment>
      );
    });
  };

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
      {videoList(props.videos, props.slug)}
    </div>
  );
};

ModulePageContent.propTypes = {
  modNumber: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  videos: PropTypes.array,
  slug: PropTypes.string.isRequired
};

export default ModulePageContent;
