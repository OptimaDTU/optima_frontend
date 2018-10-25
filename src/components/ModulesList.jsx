import React from "react";

import FetchRender from "./FetchRender";
import ModuleCard from "./ModuleCard";
import DefaultLoading from "./DefaultLoading";

const renderSingleModule = module => (
  <ModuleCard
    imageUrl={module["thumbnail"]}
    moduleNumber={module["id"]}
    data={module["description"]}
    key={module["slug"]}
    slug={module["slug"]}
  />
);

const renderModules = data => {
  return <div className="row">{data.map(renderSingleModule)}</div>;
};

/**
 * Fetches the list of modules and renders the list
 */
const ModulesList = () => {
  const getModules = fetch(
    "https://optimadtu.herokuapp.com/modules/?format=json"
  ).then(response => response.json());

  return (
    <div className="Modules container">
      <FetchRender
        toComplete={getModules}
        render={renderModules}
        loadingNode={DefaultLoading}
      />
    </div>
  );
};

export default ModulesList;
