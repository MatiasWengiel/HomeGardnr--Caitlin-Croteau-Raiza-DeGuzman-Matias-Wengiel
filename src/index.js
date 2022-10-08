import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/Index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import WeatherProvider from "./providers/WeatherProvider";
import UserProvider from "./providers/UserProvider"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import WeatherCard from "./components/WeatherCard";
import Root from "./routes/Root";
import LargeCardMain from "./components/LargeCardMain";
import LargeCardUser from "./components/LargeCardUser";
import PlantLibrary from "./routes/PlantLibrary";
import PlantForm from "./components/PlantForm";
import MyGarden from "./routes/MyGarden";
import Index from "./components/Index";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/plants/",
        element: <PlantLibrary />,
      },
      {
        path: "/plants/:id",
        element: <LargeCardMain />,
      },
      {
        path: "/my_garden",
        element: <MyGarden />,
      },
      {
        path: "/my_garden/:id",
        element: <LargeCardUser />,
      },
      {
        path: "/weather",
        element: <WeatherCard />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <WeatherProvider>
        <RouterProvider router={router} />
      </WeatherProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
