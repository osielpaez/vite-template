import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { HomePage } from './pages/home.page';
import { AppplicationShell } from './pages/app.page';
import { Home } from './components/home/home';
import { User } from './components/user/user';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/me',
    element: <AppplicationShell />,
    children: [
      {
        index: true,
        element: <Navigate to="/me/home" replace />,
      },
      { path: 'home', element: <Home /> },
      { path: 'user', element: <User /> },
    ],
  },
  {
    path: '/p',
    element: <AppplicationShell />,
    children: [
      {
        index: true,
        element: <Navigate to="/p/home" replace />,
      },
      { path: 'home', element: <Home /> },
      { path: 'user', element: <User /> },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
