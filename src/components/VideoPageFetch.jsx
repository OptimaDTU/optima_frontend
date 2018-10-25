import React from "react";

import FetchRender from "./FetchRender";
import VideoPageContent from "./VideoPageContent";
import DefaultLoading from "./DefaultLoading";

const getVidId = vid => {
  return new URL(vid).searchParams.get("v");
};

const renderVideoPage = data => {
  return (
    <VideoPageContent
      title={data.title}
      videoId={getVidId(data.url)}
      tags={data.tags}
      resources={data.resources}
      vidSlug={data.slug}
      nextSlug={data.next_video_slug}
      prevSlug={data.previous_video_slug}
      moduleSlug={data.module.slug}
    />
  );
};

const VideoPageFetch = props => {
  const path = `modules/${props.match.params.slug}/${
    props.match.params.vidslug
  }/?format=json`;
  const getVid = fetch(`https://optimadtu.herokuapp.com/${path}`).then(
    response => response.json()
  );

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
