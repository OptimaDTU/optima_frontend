const getVidId = (vid: any) => {
  return new URL(vid).searchParams.get("v");
};

const getTags = (arr: []) => {
  return arr.map((json: any) => {
    return {
      title: json.title,
      url: json.url || "#"
    };
  });
};

const videoParse = (json: any) => {
  return {
    moduleSlug: json.module.slug,
    nextSlug: json.next_video_slug,
    prevSlug: json.previous_video_slug,
    resources: json.resources,
    tags: getTags(json.tags),
    title: json.title,
    vidSlug: json.slug,
    videoId: getVidId(json.url)
  };
};

export default videoParse;
