import App from '../Client/App';
import HomePage from '../Client/Container/HomePage';

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
