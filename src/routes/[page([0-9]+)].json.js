import config from '../../theme.config.js';
import formatter from '../utils/formatter';

export async function get(req, res, next) {
  const { page } = req.params;

  const source = await config.source;
  const response = formatter(source.contents).getPostsByPage(
    page,
    config.postsPerPage,
  );

  if (response !== null) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
  } else {
    next();
  }
}
