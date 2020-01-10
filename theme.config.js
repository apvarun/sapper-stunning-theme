import MarkdownSource from './sources/theme-source-markdown';
import { initSource, gatsbySourcePolyfill } from './sources';

export default {
  source: initSource({
    // plugin: MarkdownSource,
    plugin: gatsbySourcePolyfill('gatsby-source-rss-feed'),
    options: {
      postsPerPage: 4, // Default Property
      url: `https://www.gatsbyjs.org/blog/rss.xml`,
      name: `GatsbyBlog`,
    },
  }),
};
