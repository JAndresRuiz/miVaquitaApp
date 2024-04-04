import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles/input.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {Groups} from "./components/Groups.jsx";
import {Friend} from "./components/Friend.jsx";
import {Bills} from "./components/Bills.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/groups", element: <Groups /> },
  { path: "/friends", element: <Friend /> },
  { path: "/bills", element: <Bills /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
