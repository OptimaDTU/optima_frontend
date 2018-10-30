import React from "react";

import { GlobalContext } from "../../context/Context";
import DefaultLoading from "../DefaultLoading";
import FetchRender from "../FetchRender";
import VideoPageContent from "./VideoPageContent";

import videoParse from "../../general/video_parse";
import wrapContext from "../../general/wrap_context";

interface IProps {
  apiurl: string;
  match: any;
}

const renderVideoPage = (data: any) => {
  return (
    <VideoPageContent
      title={data.title}
      videoId={data.videoId}
      tags={data.tags}
      resources={data.resources}
      vidSlug={data.vidSlug}
      nextSlug={data.nextSlug}
      prevSlug={data.prevSlug}
      moduleSlug={data.moduleSlug}
    />
  );
};

const VideoPageFetch = (props: IProps) => {
  const path = `modules/${props.match.params.slug}/${
    props.match.params.vidslug
  }/?format=json`;
  const getVid = fetch(`${props.apiurl}/${path}`)
    .then(response => response.json())
    .then(json => videoParse(json));

  return (
    <FetchRender
      toComplete={getVid}
      render={renderVideoPage}
      loadingNode={DefaultLoading}
      key={path}
    />
  );
};

export default wrapContext(GlobalContext.Consumer, VideoPageFetch);
