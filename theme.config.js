import MarkdownSource from "./sources/theme-source-markdown";
import { initSource } from "./sources";

export default {
  source: initSource({
    plugin: MarkdownSource,
    options: {
      postsPerPage: 4
    }
  }),
};
