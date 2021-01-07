import App from '../Client/App';
import HomePage from '../Client/Containers/HomePage';
import NotFoundPage from '../Client/Containers/NotFoundPage';

export default [
  {
    ...App,
    routes: [
      {
        path: '/',
        ...HomePage,
        exact: true,
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
