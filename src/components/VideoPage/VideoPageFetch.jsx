import React from "react";

import FetchRender from "../FetchRender";
import VideoPageContent from "./VideoPageContent";
import DefaultLoading from "../DefaultLoading";

import videoParse from "../../general/video_parse";

const renderVideoPage = data => {
  return (
    <VideoPageContent
      title={data.title}
      videoId={data.videoId}
      tags={data.tags}
      resources={data.resources}
      vidSlug={data.vidSlug}
      nextSlug={data.nextSlug}
      prevSlug={data.prevSlug}
      moduleSlug={data.moduleSlug}
    />
  );
};

const VideoPageFetch = props => {
  const path = `modules/${props.match.params.slug}/${
    props.match.params.vidslug
  }/?format=json`;
  const getVid = fetch(`https://optimadtu.herokuapp.com/${path}`)
    .then(response => response.json())
    .then(json => videoParse(json));

  return (
    <FetchRender
      toComplete={getVid}
      render={renderVideoPage}
      loadingNode={DefaultLoading}
      key={path}
    />
  );
};

export default VideoPageFetch;
