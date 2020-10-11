import React from 'react';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import Routes from './router';

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <React.Fragment>{renderRoutes(Routes)}</React.Fragment>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link rel="icon" type="image/x-icon" rel="icon" href="/assets/images/favicon.ico">
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css">

        <title>REACTJS SSR</title>

		  </head>
    <body>
      <div id="root">${content}</div>
      <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
      </script>

      <script src="/dist.js"></script>
      
	  </body>
    </html>
  `;
};
