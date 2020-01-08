import marked from "marked";
import fm from "front-matter";
import readingTime from "reading-time";
import { getFilesOfType } from "./utils";

const DIR = "/content/";

const transformSlug = text =>
  text
    .replace(/[^0-9A-z ]/gi, "")
    .replace(" ", "-")
    .toLowerCase();

const processFile = ({ path, content }) => {
  const ParsedMarkdown = fm(content);
  const frontmatter = ParsedMarkdown.attributes;
  const contentHtml = marked(ParsedMarkdown.body);
  const timeToRead = readingTime(ParsedMarkdown.body);
  return {
    path,
    frontmatter,
    contentHtml,
    slug: transformSlug(frontmatter.title),
    timeToRead,
  };
};

const getFileContent = () => {
  const files = getFilesOfType(DIR);
  return files.map(processFile);
};

let fileContents;
const MarkdownSource = options => {
  const { postsPerPage } = options;
  if (!fileContents) {
    fileContents = getFileContent();
  }
  return {
    getPosts: () => fileContents,
    getPostsByPage: page => ({
      posts: fileContents.slice(
        (page - 1) * postsPerPage,
        (page - 1) * postsPerPage + postsPerPage
      ),
      isFirst: page === 1,
      isLast: fileContents.length < (page - 1) * postsPerPage + postsPerPage
    }),
    getPost: slug => fileContents.find(post => post.slug === slug),
    postCount: fileContents.length,
    postsPerPage
  };
};

export default MarkdownSource;
