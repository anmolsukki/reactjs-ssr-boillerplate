import App from '../Client/App';
import HomePage from '../Client/Containers/HomePage';
import NotFoundPage from '../Client/Containers/NotFoundPage';

const renderUrl = process.env.RenderUrl;

export default [
  {
    ...App,
    routes: [
      {
        path: `${renderUrl}`,
        ...HomePage,
        exact: true,
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
