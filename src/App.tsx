import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import "./App.css";
import Index from "./pages";
import About from "./pages/about";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}

export default App;
