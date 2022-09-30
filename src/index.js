import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import WeatherProvider from "./providers/WeatherProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import WeatherCard from "./components/WeatherCard";
import Root from "./routes/Root";
import LargeCardMain from "./components/LargeCardMain";
import LargeCardUser from "./components/LargeCardUser";
import UserGarden from "./components/UserGarden";
import PlantLibrary from "./routes/PlantLibrary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/plants/",
        element: <PlantLibrary />,
      },
      {
        path: "/plants/:id",
        element: <LargeCardMain />,
      },
      {
        path: "/user_plants",
        element: <UserGarden />,
      },
      {
        path: "/user_plants/:id",
        element: <LargeCardUser />,
      },
      {
        path: "/weather",
        element: <WeatherCard />,
      },
      {
        path: "/add",
        element: <PlantForm />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WeatherProvider>
      <RouterProvider router={router} />
    </WeatherProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
