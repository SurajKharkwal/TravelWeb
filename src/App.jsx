import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import Navbar from "./components/Navbar";
import Package from "./routes/Package";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <div className="relative w-full min-h-[100vh]">
      {location.pathname !== "/sign-in" && <Navbar />}
      {children}
      {location.pathname !== "/sign-in" && <Footer />}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/package",
    element: (
      <Layout>
        <Package />
      </Layout>
    ),
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
