import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useAnimation,
} from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PrivacyScreen from "../Components/animate";
import Navbar from "../Components/navbar";
import Social from "../Components/social";
import { data } from "../data";

const Index = () => {
  const [selectedImg, setSeletectedImg] = useState<any>();
  const [isFullscreen, setFullscreen] = useState(false);
  const controls = useAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedImg?.id) {
      setTimeout(() => {
        setFullscreen(true);
      }, 1000);
    }
  }, [isFullscreen, selectedImg?.id]);

  const clickHanlder = async (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    item: any
  ) => {
    setSeletectedImg(item);
    controls.start({
      height: "100%",
      opacity: 1,
      transition: {
        ease: "linear",
        delay: 0.3,
        duration: 1,
      },
    });
    setTimeout(() => {
      navigate("/about");
    }, 1800);
  };

  return (
    <section>
      <PrivacyScreen />
      <Social />
      <Navbar />
      <LayoutGroup>
        <div className="home">
          <ul className="gap-y">
            {data.map((item) => {
              return (
                <AnimatePresence
                  key={item.id}
                  initial={false}
                  exitBeforeEnter
                  mode="wait"
                >
                  {(!selectedImg || selectedImg.id === item.id) && (
                    <motion.li
                      layout
                      exit={{ opacity: 0, y: 60, zIndex: -2 }}
                      transition={{
                        duration: 0.3,
                        type: "tween",
                        ease: "easeInOut",
                      }}
                      style={isFullscreen ? { position: "static" } : {}}
                    >
                      <motion.div layout>
                        <Link
                          to="/"
                          onClick={(event) => clickHanlder(event, item)}
                        >
                          {item.text}
                        </Link>
                        <motion.div layout>
                          <motion.img
                            style={
                              selectedImg?.id === item.id
                                ? { height: "120px", opacity: 1 }
                                : {}
                            }
                            animate={controls}
                            src={item.img}
                          />
                        </motion.div>
                      </motion.div>
                    </motion.li>
                  )}
                </AnimatePresence>
              );
            })}
          </ul>
        </div>
      </LayoutGroup>
    </section>
  );
};

export default Index;
