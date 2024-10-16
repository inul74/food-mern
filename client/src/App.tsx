import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./auth/Login";
import Signup from "./auth/Signup";
import MainLayout from "./layout/MainLayout";

import "./App.css";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
  );
}

export default App;
