export default async function(plugin, options) {
  const pluginPath = require.resolve(plugin);
  const controller = await import(pluginPath);

  let postCount = 0;
  const createNodeId = () => ++postCount;

  const posts = [];
  const createNode = post => {
    const modifiedPost = {
      frontmatter: {
        title: post.title,
        preview: 'https://picsum.photos/600/400',
        excerpt: post.contentSnippet,
      },
      slug: post.title.replace(/[- _,"':;]+/g, '-').toLowerCase(),
    };
    posts.push(modifiedPost);
  };

  await controller.sourceNodes(
    {
      actions: { createNode },
      createNodeId,
    },
    options,
  );

  const { postsPerPage } = options;

  return {
    getPosts: () => posts,
    getPostsByPage: page => ({
      posts: posts.slice(
        (page - 1) * postsPerPage,
        (page - 1) * postsPerPage + postsPerPage,
      ),
      isFirst: page === 1,
      isLast: posts.length < (page - 1) * postsPerPage + postsPerPage,
    }),
    getPost: slug => posts.find(post => post.slug === slug),
    postCount: posts.length,
    postsPerPage,
  };
}
