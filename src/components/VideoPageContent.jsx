import React from 'react'
import PropTypes from 'prop-types';
import Youtube from 'react-youtube';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';

const VideoPageContent = (props) => {
  const getTags = (tags) => {
    return (
      tags.map((tag, index) => 
        <button className="btn btn-outline-secondary btn-sm m-2" target="_blank" key={index}>#{tag["title"]}</button>)
    )
  }
  const getResources = (resources) => {
    return (
      <div className="list-group">
      {resources.map((resource, index) => 
        <a className="list-group-item list-group-item-action list-group-item-primary" href={resource.url} key={index}>{resource.title}</a>)}
      </div>
    )
  }
  return (
    <div className="container mt-4 h-100">
      <div className="row">
        <div className="col-sm-9">
          <div className="row">
            <h1>{props.title}</h1>
          </div>
          <div className="row mt-4 mw-100">
            <Youtube
              videoId={props.videoId}
              className="mw-100"
            />
          </div>
          <div className="row mt-1">
            <div className="col-md-9 col-lg-7">
              {getTags(props.tags)}
            </div>
            <div className="col-lg-2 col-md-2">
              <FaAngleLeft className="w-50 h-50" />
              <FaAngleRight className="w-50 h-50" />
              {/*<a href="#" className="btn p-0" dangerouslySetInnerHTML={{__html: octicons["arrow-left"].toSVG()}} />
              <a href="#" className="btn" dangerouslySetInnerHTML={{__html: octicons["arrow-right"].toSVG()}} />*/}
            </div>
            <div className="col-lg-3 col-md-1"></div>
          </div>
          <div className="row mt-4">
            <h3>Download Material</h3>
          </div>
          <div className="row">
            {getResources(props.resources)}
          </div>
        </div>
        <div className="col-sm-3">
        </div>
      </div>
    </div>
  )
}

VideoPageContent.propTypes = {
  title: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  tags: PropTypes.array,
  resources: PropTypes.array
}

export default VideoPageContent;
