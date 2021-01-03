import App from '../Client/App';
import HomePage from '../Client/Containers/HomePage';

export default [
  {
    ...App,
    routes: [
      {
        path: '/',
        ...HomePage,
        exact: true,
      },
    ],
  },
];
