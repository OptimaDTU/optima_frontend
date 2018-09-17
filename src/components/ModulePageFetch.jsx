import React from 'react';

import FetchRender from './FetchRender';
import ModulePageContent from './ModulePageContent';

const ModulePageFetch = (props) => {
  const getModule = Promise.reject(null)//fetch(`https://optimadtu.herokuapp.com/modules/${props.match.params.slug}/`)
    .catch(err => fetch("https://www.mocky.io/v2/5b9fadc730000075007b12d2"))
    .then(response => response.json());

  const renderModulePage = (data) => {
    return (
      <ModulePageContent
        modNumber={data.id}
        description={data.description}
        videos={data.videos}
      />
    )
  }

  return (
    <FetchRender
      toComplete={getModule}
      render={renderModulePage}
    />
  )
}

export default ModulePageFetch;