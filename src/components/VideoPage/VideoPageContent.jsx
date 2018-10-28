import React from "react";
import PropTypes from "prop-types";
import Youtube from "react-youtube";

import VideoPageNavigation from "./VideoPageNavigation";
import VideoPageTags from "./VideoPageTags";
import VideoPageResource from "./VideoPageResource";

const VideoPageContent = props => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-sm-9">
          <div className="container">
            <h1>{props.title}</h1>
          </div>
          <div className="container mt-4 mw-100">
            <Youtube videoId={props.videoId} className="mw-100" />
          </div>
          <div className="container mt-1">
            <div className="row">
              <div className="col-md-9 col-lg-7 col-7">
                {props.tags.map((tag, index) => (
                  <VideoPageTags tag={tag} key={index} />
                ))}
              </div>
              <div className="col-lg-2 col-md-2 p-2 col-5">
                <VideoPageNavigation
                  moduleSlug={props.moduleSlug}
                  prevSlug={props.prevSlug}
                  nextSlug={props.nextSlug}
                />
              </div>
              <div className="col-lg-3 col-md-1 d-none d-sm-block" />
              <div />
            </div>
          </div>
          <div className="container mt-4">
            <h3>Download Material</h3>
          </div>
          <div className="container">
            <div className="list-group">
              {props.resources.map((resource, index) => (
                <VideoPageResource resource={resource} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-sm-3" />
      </div>
    </div>
  );
};

VideoPageContent.propTypes = {
  moduleSlug: PropTypes.string,
  nextSlug: PropTypes.string,
  prevSlug: PropTypes.string,
  resources: PropTypes.array,
  tags: PropTypes.array,
  title: PropTypes.string.isRequired,
  vidSlug: PropTypes.string,
  videoId: PropTypes.string.isRequired
};

export default VideoPageContent;
