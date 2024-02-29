import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Body from "./Compoments/Body";
import Destination from "./Compoments/Destination";
import Crew from "./Compoments/Crew";
import Technology from "./Compoments/Technology";

const router = createBrowserRouter([
  {
    path: "/Planette",
    element: <Body></Body>,
  },
  {
    path: "/Destination",
    element: <Destination></Destination>,
  },
  {
    path: "/Crew",
    element: <Crew></Crew>,
  },
  {
    path: "/Technology",
    element: <Technology></Technology>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);