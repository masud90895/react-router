import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layOut/Main";
import LoginPage from "./component/LoginPage/LoginPage";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Detaines from "./component/Detaines/Detaines";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://restcountries.com/v3.1/all");
          },
          element: <Home></Home>,
        },
        {
          path: "/loginPage",
          element: <LoginPage></LoginPage>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/detaines/:name",
          loader: async ({params}) => {
            return fetch(`https://restcountries.com/v3.1/name/${params.name}`);
          },
          element: <Detaines></Detaines>,
        }
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
