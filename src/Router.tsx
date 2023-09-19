import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { HomePage } from './pages/home.page';
import { AppplicationShell } from './pages/app.page';
import { Home } from './components/home/home';
import { User } from './components/user/user';
import { ClientsPage } from './pages/clients.page';
import { SchedulePage } from './pages/schedule.page';
import { ActivityPage } from './pages/activity.page';
import { TasksPage } from './pages/tasks.page';
import { PersonelPage } from './pages/personel.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/my',
    element: <AppplicationShell />,
    children: [
      {
        index: true,
        element: <Navigate to="/my/home" replace />,
      },
      { path: 'home', element: <Home /> },
      { path: 'schedule', element: <SchedulePage /> },
      { path: 'activity', element: <ActivityPage /> },
      { path: 'tasks', element: <TasksPage /> },
      { path: 'clients', element: <ClientsPage /> },
      { path: 'personel', element: <PersonelPage /> },
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
