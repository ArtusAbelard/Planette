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
import Planete from "./Compoments/Planete";
import Crewcarousel from "./Compoments/Crewcarousel";
import Technologycarousel from "./Compoments/Technologycarousel";

const router = createBrowserRouter([
  {
    path: "/Planette",
    element: <Body></Body>,
  },
  {
    path: "/Destination",
    element: <Destination></Destination>,
    children:[
      {
        path:"/Destination/Planete/:id",
        element: <Planete></Planete>
      }
    ] 
  },
  {
    path: "/Crew",
    element: <Crew></Crew>,
    children:[
      {
        path:"/Crew/Crewcarousel/:id",
        element: <Crewcarousel></Crewcarousel>
      }
    ]
  },
  {
    path: "/Technology",
    element: <Technology></Technology>,
    children:[
      {
        path:"/Technology/Technologycarousel/:id",
        element: <Technologycarousel></Technologycarousel>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);