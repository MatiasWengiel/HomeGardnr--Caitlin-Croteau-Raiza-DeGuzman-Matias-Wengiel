import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import WeatherProvider from './providers/WeatherProvider';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ErrorPage from "./error-page";
import WeatherCard from "./components/WeatherCard";
import Root from "./routes/Root";
import PlantLibrary from "./components/PlantLibrary";
import PlantCard from "./components/PlantCard";
import LargeCardUser from "./components/LargeCardUser";
import UserGarden from "./components/UserGarden";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/weather",
        element: <WeatherCard />,
      },
      {
        path: "/plants",
        element: <PlantLibrary />,
      },
      {
        path: "/plants/:id",
        element: <PlantCard />,
      },
      {
        path: "/user_plants/:id",
        element: <LargeCardUser />
      },
      {
        path: "/user_plants",
        element: <UserGarden />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WeatherProvider>
      <RouterProvider router={router} />
    </WeatherProvider>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
