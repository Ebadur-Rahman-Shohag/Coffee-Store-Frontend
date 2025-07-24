import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import SingleCoffee from "./pages/SingleCoffee/SingleCoffee.jsx";
import AddProduct from "./pages/AddProduct/AddProduct.jsx";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/singlepage",
    element: <SingleCoffee />,
  },
  {
    path: "/addcoffee",
    element: <AddProduct />,
  },
  {
    path: "/updatecoffee",
    element: <UpdateProduct />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
