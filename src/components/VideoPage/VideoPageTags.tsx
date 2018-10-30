import React from "react";

interface IProps {
  tag: {
    title: string;
    url: string;
  };
}

const VideoPageTags = (props: IProps) => {
  const { tag } = props;
  return (
    <a
      className="btn btn-outline-secondary btn-sm m-2"
      target="_blank"
      href={tag.url}
    >
      #{tag.title}
    </a>
  );
};

export default VideoPageTags;
