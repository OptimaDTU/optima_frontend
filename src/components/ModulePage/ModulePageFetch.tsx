import React from "react";

import { GlobalContext } from "../../context/Context";
import DefaultLoading from "../DefaultLoading";
import FetchRender from "../FetchRender";
import ModulePageContent from "./ModulePageContent";

import moduleParse from "../../general/module_parse";
import wrapContext from "../../general/wrap_context";

interface IProps {
  apiurl: string;
  match: any;
}

// Render the module page from data received
const renderModulePage = (data: any) => {
  return (
    <ModulePageContent
      modNumber={data.id}
      description={data.description}
      videos={data.videos}
      slug={data.slug}
    />
  );
};

const ModulePageFetch = (props: IProps) => {
  const getModule = fetch(
    `${props.apiurl}/modules/${props.match.params.slug}/?format=json`
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

export default wrapContext(GlobalContext.Consumer, ModulePageFetch);
