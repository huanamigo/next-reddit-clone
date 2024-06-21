const paths = {
  home() {
    return '/';
  },
  topicShow(slug: string) {
    return `/topic/${slug}`;
  },
  createTopic(slug: string) {
    return `/topic/${slug}/posts/new`;
  },
  showPost(slug: string, id: string) {
    return `/topic/${slug}/posts/${id}`;
  },
};

export default paths;
