const getVidId = vid => {
  return new URL(vid).searchParams.get("v");
};

const videoParse = json => {
  return {
    title: json.title,
    videoId: getVidId(json.url),
    tags: json.tags,
    resources: json.resources,
    vidSlug: json.slug,
    nextSlug: json.next_video_slug,
    prevSlug: json.previous_video_slug,
    moduleSlug: json.module.slug
  };
};

export default videoParse;
