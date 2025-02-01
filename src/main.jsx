import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import About from './pages/About.jsx';
import CategorePage from './pages/CategorePage/CategorePage.jsx';
import Item from './pages/item.jsx';
import Buy from './pages/Buy.jsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<MainPage />} />
    <Route path='about/:id' element={<About />} />
    <Route path='Categore' element={<CategorePage />} />
    <Route path='item/:id' element={<Item />} />
    <Route path='buy' element={<Buy />} />

  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
