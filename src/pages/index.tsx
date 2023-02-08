import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PrivacyScreen from "../Components/animate";
import Navbar from "../Components/navbar";
import Social from "../Components/social";
import { route } from "../data";

const transition = { duration: 0.3, ease: "easeInOut" };
const varients = {
  animate: { height: "100%", opacity: 1 },
  exit: { opacity: 0, y: 60 },
};

const Index = () => {
  const [selectedImg, setSeletectedImg] = useState<any>();
  const navigate = useNavigate();
  const sleep = () => {
    setTimeout(() => {
      navigate(`/project/${selectedImg.link}`);
    }, 500);
  };

  const clickHanlder = async (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    item: any
  ) => {
    setSeletectedImg(item);
  };

  return (
    <section>
      <Social />
      <Navbar>{[{ href: "/about", text: "À Propos" }]}</Navbar>
      <PrivacyScreen />

      <LayoutGroup>
        <div className="home">
          <motion.ul
            className="gap-y"
            transition={{ staggerChildren: 0.3, ease: "easeInOut" }}
          >
            {route.map((item) => {
              const isFullScreen = selectedImg?.id === item.id;
              return (
                <AnimatePresence key={item.id} initial={false}>
                  {(!selectedImg || isFullScreen) && (
                    <motion.li
                      layout
                      exit={!isFullScreen ? varients.exit : {}}
                      transition={transition}
                      animate={isFullScreen ? { height: "100%" } : {}}
                    >
                      <motion.div
                        layout
                        transition={{ layout: { ease: "easeInOut" } }}
                      >
                        <Link
                          to="/"
                          onClick={(event) => clickHanlder(event, item)}
                        >
                          <motion.a>{item.text}</motion.a>
                        </Link>
                        <div>
                          <motion.img
                            onAnimationComplete={() => sleep()}
                            animate={isFullScreen ? varients.animate : {}}
                            src={item.img}
                            transition={{ ...transition, duration: 0.8 }}
                            alt="img"
                          />
                        </div>
                      </motion.div>
                    </motion.li>
                  )}
                </AnimatePresence>
              );
            })}
          </motion.ul>
        </div>
      </LayoutGroup>
    </section>
  );
};

export default Index;
