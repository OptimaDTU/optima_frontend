import React from 'react';

import FetchRender from './FetchRender';
import VideoPageContent from './VideoPageContent';

const VideoPageFetch = (props) => {
  const getVid = fetch(`https://optimadtu.herokuapp.com/modules/${props.match.params.slug}/${props.match.params.vidslug}/?format=json`)
    .catch(err => fetch("http://www.mocky.io/v2/5bb59d1c3000008100aabd6e"))
    .then(response => response.json());

  const renderVideoPage = (data) => {
    return (
      <VideoPageContent
        title={data.title}
        videoId={data.yt_id}
        tags={data.tags}
        resources={data.resources}
      />
    )
  }

  return (
    <FetchRender
      toComplete={getVid}
      render={renderVideoPage}
    />
  )
}

export default VideoPageFetch;