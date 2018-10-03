import React from 'react';

import FetchRender from './FetchRender';
import VideoPageContent from './VideoPageContent';

const VideoPageFetch = (props) => {
  const getModule = fetch(`https://optimadtu.herokuapp.com/modules/${props.match.params.slug}/${props.match.params.vidslug}/?format=json`)
    .catch(err => fetch("http://www.mocky.io/v2/5bb4114c3300000e00cad4d2"))
    .then(response => response.json());

  return (
    <div></div>
  )
}

export default VideoPageFetch;