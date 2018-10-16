import React from 'react';

import FetchRender from './FetchRender';
import VideoPageContent from './VideoPageContent';
import DefaultLoading from './DefaultLoading';

const getVidId = (vid) => {
  return (new URL(vid)).searchParams.get("v");
}

const renderVideoPage = (data) => {
  return (
    <VideoPageContent
      title={data.title}
      videoId={getVidId(data.url)}
      tags={data.tags}
      resources={data.resources}
    />
  )
}

const VideoPageFetch = (props) => {
  const getVid = fetch(`https://optimadtu.herokuapp.com/modules/${props.match.params.slug}/${props.match.params.vidslug}/?format=json`)
    .then(response => response.json());

  return (
    <FetchRender
      toComplete={getVid}
      render={renderVideoPage}
      loadingNode={DefaultLoading}
    />
  )
}

export default VideoPageFetch;