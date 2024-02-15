import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Rooms from "./pages/Rooms.jsx";
import Inaround from "./pages/Inaround.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "rooms",
    element: <Rooms />,
  },
  {
    path: "inaround",
    element: <Inaround />,
  },
  {
    path: "gallery",
    element: <Gallery />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
