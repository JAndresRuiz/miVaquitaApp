import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles/input.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Friends } from "./components/Friends.jsx";
import { Bills } from "./components/Bills.jsx";
import { Groups } from './components/Groups.jsx';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/groups", element: <Groups /> },
  { path: "/friends", element: <Friends /> },
  { path: "/bills", element: <Bills /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
