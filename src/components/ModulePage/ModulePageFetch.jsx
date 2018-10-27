import React from "react";

import FetchRender from "../FetchRender";
import ModulePageContent from "./ModulePageContent";
import DefaultLoading from "../DefaultLoading";

import moduleParse from "../../general/module_parse";

// Render the module page from data received
const renderModulePage = data => {
  return (
    <ModulePageContent
      modNumber={data.id}
      description={data.description}
      videos={data.videos}
      slug={data.slug}
    />
  );
};

const ModulePageFetch = props => {
  const getModule = fetch(
    `https://optimadtu.herokuapp.com/modules/${
      props.match.params.slug
    }/?format=json`
  )
    .then(response => response.json())
    .then(json => moduleParse(json));

  return (
    <FetchRender
      toComplete={getModule}
      render={renderModulePage}
      loadingNode={DefaultLoading}
    />
  );
};

export default ModulePageFetch;
