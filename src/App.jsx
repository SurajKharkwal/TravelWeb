import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookPage from './pages/bookPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/aboutPage';
import PackagePage from './pages/packagePage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />, 
    },
    {
      path: "/Home",
      element: <HomePage />,
    },
    {
      path: "/About",
      element: <AboutPage />,
    },
    {
      path: "/Book",
      element: <BookPage />,
    },
    {
      path: "/Package",
      element: <PackagePage />,
    },
  ]);

  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}
export default App;
