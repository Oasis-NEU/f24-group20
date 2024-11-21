import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Courses from './Courses.jsx'
import Compare from "./Compare.jsx"
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {path: "/", element: <App /> },
  {path: "/Courses", element: <Courses /> },
  {path: "/Compare", element: <Compare />}
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
