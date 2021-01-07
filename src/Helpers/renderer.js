import React from 'react';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import serialize from 'serialize-javascript';
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
        <meta name="theme-color" content="#000000" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta data-react-helmet="true" name="robots" content="INDEX, FOLLOW" />
        <meta data-react-helmet="true" name="googlebot" content="INDEX, FOLLOW">

        <!-- Safari -->
        <meta name="apple-mobile-web-app-apable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="ReactJS SSR" />

        <!-- Internate Explorer -->
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#000000" />

        <link data-react-helmet="true" rel="canonical" href="https://github.com/anmolsukki"/>
        <link rel="icon" type="image/x-icon" rel="icon" href="/assets/images/favicon.ico">
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css?v=1.1">
        <link rel="stylesheet" type="text/css" href="/assets/css/notFound.css">

        <title>REACTJS SSR</title>

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_CODE_HERE"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_CODE_HERE');
        </script>

		  </head>
    <body>
      <div id="root">${content}</div>
      <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
      </script>

      <script src="/dist.js"></script>

      <script>
        if ('serviceWorker' in navigator) {
          window.addEventListener('load', function() {
            navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
              return null;
            }, function(err) {
              return null;
            });
          });
        }
      </script>

	  </body>
    </html>
  `;
};
