import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import Index from "./pages";
import About from "./pages/about";
import Project from "./pages/project";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/project/:project",
      element: <Project />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence initial={false} mode="wait" exitBeforeEnter>
      {cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}

export default App;
