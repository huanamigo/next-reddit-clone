const paths = {
  home() {
    return '/';
  },
  topicShow(slug: string) {
    return `/topics/${slug}`;
  },
  createTopic(slug: string) {
    return `/topics/${slug}/posts/new`;
  },
  showPost(slug: string, id: string) {
    return `/topics/${slug}/posts/${id}`;
  },
};

export default paths;
