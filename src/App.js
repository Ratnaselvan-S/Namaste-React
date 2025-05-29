import React, { useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import UserContest from "./utils/UserContext";

const About = lazy(() => {
  return import("./components/About");
});

const Contact = lazy(() => {
  return import("./components/Contact");
});

const AppLayout = () => {
  const [userName, setUserName] = useState();

  return (
    <UserContest.Provider value={{ loggedinuser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContest.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading .....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading .....</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurantmenu/:id",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const AppInitializer = () => {
  return <RouterProvider router={appRouter} />;
};

export default AppInitializer;
