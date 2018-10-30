import React from "react";

import { GlobalContext } from "../context/Context";
import DefaultLoading from "./DefaultLoading";
import FetchRender from "./FetchRender";
import ModuleListRender from "./ModuleListRender";

import wrapContext from "../general/wrap_context";

interface IProps {
  apiurl: string;
}

/**
 * Fetches the list of modules and renders the list
 */
const ModulesList: React.SFC<IProps> = (props: IProps) => {
  const getModules = fetch(`${props.apiurl}/modules/?format=json`).then(
    response => response.json()
  );

  const moduleListRender = (data: []) => <ModuleListRender data={data} />;

  return (
    <div className="Modules container">
      <FetchRender
        toComplete={getModules}
        render={moduleListRender}
        loadingNode={DefaultLoading}
      />
    </div>
  );
};

export default wrapContext<IProps>(GlobalContext.Consumer, ModulesList) as React.SFC<{}>;
