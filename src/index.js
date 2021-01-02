import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import renderer from './Helpers/renderer';
import Routes from './Helpers/router';
import createStore from './Helpers/store';

var bodyParser = require('body-parser');

// const basicAuth = require('express-basic-auth');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/dist.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

app.use(express.static('public'));
/* app.use(
  basicAuth({
    users: { admin: 'scbank' },
    challenge: true,
  })
); */

app.get('*', (req, res) => {
  const store = createStore(req);
  const promises = matchRoutes(Routes, req.path)
    .map(({ route, match }) => {
      return route.loadData ? route.loadData(store, match) : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises)
    .then(() => {
      const context = {};
      const content = renderer(req, store, context);
      if (context.url) {
        return res.redirect(301, context.url);
      }
      if (context.notFound) {
        res.status(404);
      }
      res.send(content);
    })
    .catch((err) => console.log(err));
});

app.listen(3000, () => {
  console.log(`server is up and running`);
});
