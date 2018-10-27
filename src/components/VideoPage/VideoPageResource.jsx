import React from "react";

const VideoPageResource = props => {
  const { resource } = props;
  return (
    <a
      className="list-group-item list-group-item-action list-group-item-primary"
      href={resource.url}
      target="_blank"
    >
      {resource.title}
    </a>
  );
};

export default VideoPageResource;