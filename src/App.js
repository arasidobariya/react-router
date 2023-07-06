import Background from './pages/Background';
import Tenth from './pages/Tenth';
import Twelfth from './pages/Twelfth';
import BE from './pages/BE';
import ME from './pages/ME';
import Pm from './pages/Pm';
import Hr from './pages/Hr';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import BE1 from './pages/BE1';
import BE3 from './pages/BE3';
import BE2 from './pages/BE2';
import BE4 from './pages/BE4';
import ME1 from './pages/ME1';
import ME2 from './pages/ME2';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: 'true',
          element: <Background />,
        },
        {
          path: '/10th',
          element: <Tenth />,
        },
        {
          path: '/12th',
          element: <Twelfth />,
        },
        {
          path: '/be',
          element: <BE />,
          children: [
            {
              path: '/be/1',
              element: <BE1 />,
            },
            {
              path: '/be/2',
              element: <BE2 />,
            },
            {
              path: '/be/3',
              element: <BE3 />,
            },
            {
              path: '/be/4',
              element: <BE4 />,
            },
          ],
        },
        {
          path: '/me',
          element: <ME />,
          children: [
            {
              path: '/me/1',
              element: <ME1 />,
            },
            {
              path: '/me/2',
              element: <ME2 />,
            },
          ],
        },
        {
          path: '/pm',
          element: <Pm />,
        },
        {
          path: '/Hr',
          element: <Hr />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
