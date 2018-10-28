import React from "react";

const VideoPageTags = props => {
  const {tag} = props;
  return (
    <button
      className="btn btn-outline-secondary btn-sm m-2"
      target="_blank"
    >
      #{tag.title}
    </button>
  );
};

export default VideoPageTags;
