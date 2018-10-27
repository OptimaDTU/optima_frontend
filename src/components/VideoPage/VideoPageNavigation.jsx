import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const VideoPageNavigation = props => {
  const { moduleSlug, prevSlug, nextSlug } = props;
  const linkStyle = {
    color: "inherit",
    textDecoration: "none"
  };
  let prevLink = (
    <Link to={`/module/${moduleSlug}/video/${prevSlug}`} style={linkStyle}>
      <FaAngleLeft className="w-50 h-50" />
    </Link>
  );

  let nextLink = (
    <Link to={`/module/${moduleSlug}/video/${nextSlug}`} style={linkStyle}>
      <FaAngleRight className="w-50 h-50" />
    </Link>
  );

  if (prevSlug == null)
    prevLink = <FaAngleLeft className="w-50 h-50" color="gray" />;

  if (nextSlug == null)
    nextLink = <FaAngleRight className="w-50 h-50" color="gray" />;

  return (
    <React.Fragment>
      {prevLink}
      {nextLink}
    </React.Fragment>
  );
};

export default VideoPageNavigation;
