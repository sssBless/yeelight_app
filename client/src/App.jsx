import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout/Layout';
import { Home } from './routes/Home/Home';
import { Info } from './routes/Info/Info';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'bulb_info',
        element: <Info />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
