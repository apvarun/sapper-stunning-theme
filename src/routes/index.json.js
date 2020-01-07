import config from "../../theme.config.js";

export async function get(req, res, next) {
  const posts = config.source.getPosts();

  if (posts !== null) {
    const response = {
      postsPerPage: config.source.postsPerPage,
      posts
    };
    
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response));
  } else {
    next();
  }
}
