import config from '../../../theme.config';

export async function get(req, res, next) {
  const { slug } = req.params;

  const source = await config.source;
  const post = source.getPost(slug);

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
