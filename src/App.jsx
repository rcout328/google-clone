import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Result from "./Components/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: `/result/:link`,
    element: <Result />,
  },
]);

function App() {
  return (
    <>
      {" "}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
