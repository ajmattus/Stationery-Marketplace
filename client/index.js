import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App.jsx';
import SignInSide from './components/SignIn.jsx';
import Checkout from './components/Checkout.jsx';
import ProductPage from './components/ProductPage.jsx';
import Review from './components/Review.jsx';
import PaymentForm from './components/PaymentForm.jsx';

// uncomment so that webpack can bundle styles
// import styles from './scss/application.scss';

const router = createBrowserRouter([
  {
    path: '/sign',
    element: <SignInSide />,
  },
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/checkout/review/payment',
    element: <PaymentForm />,
  },
  // {
  //   path: '/products',
  //   element: <ProductPage />
  // },
  {
    path: 'checkout/review',
    element: <Review />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);
