import MainLayout from '@/Layout/MainLayout';
import AboutUs from '@/component/About/AboutUs';
import Cart from '@/component/Cart/Cart';
import ProductMangement from '@/component/Manage/ManageProducts';
import NotFound from '@/component/NotFound/NotFound';
import ProductDetails from '@/component/ProductDetails/ProductDetails';
import Product from '@/component/Products/Product';
import CheckOut from '@/component/checkout/CheckOut';
import Home from '@/pages/HOme/Home';
import { createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        element: <Product />,
      },
      {
        path: 'products-management',
        element: <ProductMangement />,
      },
      {
        path: 'product-details',
        element: <ProductDetails />,
      },
      {
        path: 'product/:id',
        element: <ProductDetails />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <CheckOut />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
