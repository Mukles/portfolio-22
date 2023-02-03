import { useRoutes } from "react-router-dom";
import "./App.css";
import Index from "./pages";
import About from "./pages/about";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Index />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return element;
}

export default App;
