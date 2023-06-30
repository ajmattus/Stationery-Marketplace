import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './components/App.jsx';
import SignInSide from './components/SignInSide.jsx';

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);