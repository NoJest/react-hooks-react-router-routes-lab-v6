import { createRoot } from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./index.css"
import Home from './pages/Home.jsx'
import Directors from './pages/Directors.jsx'
import Actors from './pages/Actors.jsx'
import Movie from './pages/Movie.jsx';

const routes = [
  {
    path: "/",
    element:<Home />
  },
  {
    path: "/directors",
    element:<Directors/>
  },  {
    path: "/actors",
    element:<Actors/>
  },  {
    path: "/movie/:id",
    element:<Movie/>
  }
  ];
  

export default routes;