import {
  AnimatePresence,
  LayoutGroup,
  motion,
  MotionConfig,
} from "framer-motion";
import { useEffect, useState } from "react";
import { data } from "../data";

const imageMotion = {
  rest: {
    x: 0,
    opacity: 0,
    height: 100,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },

  hover: {
    height: 120,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const Index = () => {
  const [selectedImg, setSeletectedImg] = useState<any>();
  const [isFullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    if (selectedImg?.id) {
      setTimeout(() => {
        setFullscreen(true);
      }, 1000);
    }
  }, [isFullscreen, selectedImg?.id]);

  const clickHanlder = (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    item: any
  ) => {
    event.preventDefault();
    setSeletectedImg(item);
  };

  return (
    <section>
      <LayoutGroup>
        <MotionConfig transition={{ duration: 0.5 }}>
          <div className="home">
            <ul className="gap-y">
              {data.map((item) => {
                return (
                  <AnimatePresence
                    key={item.id}
                    initial={false}
                    exitBeforeEnter
                  >
                    {(!selectedImg || selectedImg.id === item.id) && (
                      <motion.li
                        exit={{ opacity: 0, y: 60, zIndex: -2 }}
                        transition={{
                          duration: 0.5,
                          type: "tween",
                          ease: "circOut",
                        }}
                        style={isFullscreen ? { position: "static" } : {}}
                      >
                        <motion.div
                          whileHover="hover"
                          layoutId={`container-${item.id}`}
                        >
                          <motion.p
                            layoutId={`text-${item.id}`}
                            onClick={(event) => clickHanlder(event, item)}
                          >
                            Portfolio
                          </motion.p>
                          <motion.div layoutId={`img-${item.id}`}>
                            <motion.img
                              data-is-fullscreen={isFullscreen}
                              variants={imageMotion}
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
        </MotionConfig>
      </LayoutGroup>
    </section>
  );
};

export default Index;
