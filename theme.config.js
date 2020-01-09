import MarkdownSource from "./sources/theme-source-markdown";
import { initSource } from "./sources";

export default {
  source: initSource({
    // plugin: MarkdownSource,
    plugin: 'gatsby-source-rss-feed',
    type: 'gatsby',
    options: {
      postsPerPage: 4, // Default Property
      url: `https://www.gatsbyjs.org/blog/rss.xml`,
      name: `GatsbyBlog`,
    }
  }),
};
