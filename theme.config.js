import sapperSource, { gatsbyPlugin, markdownSource } from 'sapper-sources';

export default {
  source: sapperSource({
    plugin: markdownSource,
    // plugin: gatsbyPlugin('gatsby-source-rss-feed'),
    options: {
      postsPerPage: 4, // Used in svelte template
      contentPath: '/contents/'
    },
  }),
};
