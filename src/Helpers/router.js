import App from '../Client/App';
import Home from '../Client/Container/Home';

export default [
  {
    ...App,
    routes: [
      {
        path: '/',
        ...Home,
        exact: true,
      },
    ],
  },
];
