/**
 * Parses the module json provided to it.
 * This code was originally in the component but I've decided to abstract this.
 * I can even use tv4 to validate json before passing it down.
 */

const getResources = resources => {
  if (!resources) return [];
  return resources.map(res => ({
    title: res["title"],
    url: res["url"]
  }));
};

// filter out data for use in rendering
const getVideos = videoJSONList => {
  return videoJSONList.map(vidJSON => {
    return {
      title: vidJSON["title"],
      description: vidJSON["description"],
      slug: vidJSON["slug"],
      thumbnail: vidJSON["thumbnail"],
      resources: getResources(vidJSON["resources"])
    };
  });
};

const moduleParse = json => {
  return {
    id: json.id,
    description: json.description,
    videos: getVideos(json.videos),
    slug: json.slug
  }
}

export default moduleParse;