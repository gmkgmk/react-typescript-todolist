// const Koa =
import Koa from 'koa';
import logger from 'koa-logger';
import koaBodyparser from 'koa-bodyparser';
import json from 'koa-json';
import kcors from 'kcors';

import Router from './server/route';
const app = new Koa();
app.use(kcors());
let port = 3000;
app.use(logger());
app.use(koaBodyparser({}));
app.use(json({}));

app.use(Router.routes()).use(Router.allowedMethods());

// app.use(historyApiFallback());

app.listen(port, () => {
  console.log(`app is listening at porn ${port}!`);
});
