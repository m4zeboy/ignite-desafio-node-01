import { createServer } from 'node:http';
import { json } from './middlewares/json.js';
import { router } from './routes.js';
import { extractQueryParams } from './utils/extract-query-params.js'

const server = createServer(async(req, res) => {
  const { method, url } = req;

  await json(req,res);

  const route = router.find(method, url);

  if(route) {
    const routeParams = req.url.match(route.path);
    const { query, ...params } = routeParams.groups;

    req.params = params;

    req.query = query ? extractQueryParams(query) : {};

    return route.handler(req,res);
  }

  res.writeHead(404);
})

server.listen(3333);