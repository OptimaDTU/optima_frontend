import React from 'react';

import FetchRender from './FetchRender';
import ModulePageContent from './ModulePageContent';

const ModulePageFetch = (props) => {
  const getModule = fetch(`https://optimadtu.herokuapp.com/modules/${props.match.params.slug}/?format=json`)
    .catch(err => fetch("https://www.mocky.io/v2/5bb31855330000650011ca7e"))
    .then(response => response.json());

  const renderModulePage = (data) => {
    return (
      <ModulePageContent
        modNumber={data.id}
        description={data.description}
        videos={data.videos}
        slug={data.slug}
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