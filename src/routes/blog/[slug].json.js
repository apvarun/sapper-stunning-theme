import config from '../../../theme.config';
import formatter from '../../utils/formatter';

export async function get(req, res, next) {
  const { slug } = req.params;

  const source = await config.source;
  const post = formatter(source.contents, source.postsPerPage).getPost(slug);

  if (post) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    res.end(JSON.stringify(post));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      }),
    );
  }
}
