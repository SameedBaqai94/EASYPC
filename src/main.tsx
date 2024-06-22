import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/About/AboutPage';
import RouteErrorPage from './pages/Error/RouteErrorPage';
import BuildPcPage from './pages/BuildPc/BuildPcPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <RouteErrorPage />,
  }, {
    path: "/about",
    element: <AboutPage />,
    errorElement: <RouteErrorPage />
  }, {
    path: "/build",
    element: <BuildPcPage />
  }]
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
