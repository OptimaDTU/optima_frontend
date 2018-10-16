import React from 'react';

import FetchRender from './FetchRender';
import ModulePageContent from './ModulePageContent';
import DefaultLoading from './DefaultLoading';

const getResources = (resources) => {
  if (!resources) return [];
  return resources.map(res => (
    {
      title: res["title"],
      url: res["url"]
    }
  ));
}

// filter out data for use in rendering
const getVideos = (videoJSONList) => {
  return videoJSONList.map(vidJSON => {
    return {
      title: vidJSON["title"],
      description: vidJSON["description"],
      slug: vidJSON["slug"],
      thumbnail: vidJSON["thumbnail"],
      resources: getResources(vidJSON["resources"])
    }
  });
}

// Render the module page from data received
const renderModulePage = (data) => {
  return (
    <ModulePageContent
      modNumber={data.id}
      description={data.description}
      videos={getVideos(data.videos)}
      slug={data.slug}
    />
  )
}

const ModulePageFetch = (props) => {
  const getModule = fetch(`https://optimadtu.herokuapp.com/modules/${props.match.params.slug}/?format=json`)
      .then(response => response.json());
    // .catch(err => fetch("https://www.mocky.io/v2/5bb31855330000650011ca7e"))
    // .then(response => response.json());

  return (
    <FetchRender
      toComplete={getModule}
      render={renderModulePage}
      loadingNode={DefaultLoading}
    />
  )
}

export default ModulePageFetch;