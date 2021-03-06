/**
 * Parses the module json provided to it.
 * This code was originally in the component but I've decided to abstract this.
 * I can even use tv4 to validate json before passing it down.
 */

const getResources = (resources: []) => {
  if (!resources) {
    return [];
  }
  return resources.map((res: any) => ({
    title: res.title,
    url: res.url
  }));
};

// filter out data for use in rendering
const getVideos = (videoJSONList: []) => {
  return videoJSONList.map((vidJSON: any) => {
    return {
      description: vidJSON.description,
      resources: getResources(vidJSON.resources),
      slug: vidJSON.slug,
      thumbnail: vidJSON.thumbnail,
      title: vidJSON.title
    };
  });
};

const moduleParse = (json: any) => {
  return {
    description: json.description,
    id: json.id,
    slug: json.slug,
    videos: getVideos(json.videos)
  };
};

export default moduleParse;
