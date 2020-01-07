import config from "../../theme.config.js";

export async function get(req, res, next) {
  const { page } = req.params;

  const response = config.source.getPostsByPage(page, config.postsPerPage);

  if (response !== null) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response));
  } else {
    next();
  }
}
