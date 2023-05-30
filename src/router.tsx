import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home, NewProduct, ProductDetail, Products, Notfound } from './pages';
import { Login, Signup } from './pages/users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Notfound />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/products/new',
        element: <NewProduct />,
      },
      {
        path: '/products/:productId',
        element: <ProductDetail />,
      },
      {
        path: '/categories/:catecoryId',
        element: <Products />,
      },
      {
        path: '/search',
        element: <Products />,
      },
    ],
  },
]);

export default router;
