export default function(plugin, options) {
  const pluginPath = require.resolve(plugin);
  const controller = import(pluginPath);

  let postCount = 0;
  const createNodeId = () => ++postCount;

  const posts = [];
  const createNode = (post) => {
    posts.push(post)
  };

  controller.then(cont => cont.sourceNodes({
    actions: {createNode},
    createNodeId
  }, options))

  return {
    getPosts: () => posts,
    getPostsByPage: () => posts,
    getPost: () => posts[0]
  };
}
