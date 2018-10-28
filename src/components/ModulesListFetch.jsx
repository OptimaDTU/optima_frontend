import React from "react";

import FetchRender from "./FetchRender";
import DefaultLoading from "./DefaultLoading";
import ModuleListRender from "./ModuleListRender";

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
        render={data => <ModuleListRender data={data} />}
        loadingNode={DefaultLoading}
      />
    </div>
  );
};

export default ModulesList;
