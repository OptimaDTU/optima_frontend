import React from 'react';
import PropTypes from 'prop-types';

const ModulePageContent = (props) => {
  
  const videoList = (videoData) => {
    return videoData.map((data, index) => {
      return (
        <div className="row mt-3 mb-3" key={index}>
          <div className="col-sm-1 align-self-center">
            {index+1}.
          </div>
          <div className="col-sm-2">
            <img src={data.thumbnail} className="img-thumbnail" alt={data.title} />
          </div>
          <div className="col-sm-6 align-self-center">
            <p>{data.description}</p>
          </div>
          <div className="col-sm-3 border-left border-dark">
            {data["resources"].map((resource, index) =>
              <a className="btn btn-outline-primary btn-sm m-2" href={resource["url"]} target="_blank" key={index}>{resource["title"]}</a>
            )}
          </div>
        </div>
      )
    })
  }

  return (
    <div className="container mt-4 h-100">
      <div className="row">
        <div className="col-sm-6">
          <h1>Module {props.modNumber}</h1>
          <br />
          <p>{props.description}</p>
        </div>
      </div>
      {videoList(props.videos)}
    </div>
  )
}

ModulePageContent.propTypes = {
  modNumber: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  videos: PropTypes.array
}

export default ModulePageContent;