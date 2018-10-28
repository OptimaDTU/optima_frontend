const getVidId = vid => {
  return new URL(vid).searchParams.get("v");
};

const videoParse = json => {
  return {
    moduleSlug: json.module.slug,
    nextSlug: json.next_video_slug,
    prevSlug: json.previous_video_slug,
    resources: json.resources,
    tags: json.tags,
    title: json.title,
    vidSlug: json.slug,
    videoId: getVidId(json.url)
  };
};

export default videoParse;
