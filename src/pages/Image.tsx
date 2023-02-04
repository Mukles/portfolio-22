import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  img: string;
}

interface Item {
  id: number;
  img: string;
}

const Image = ({ id, img }: Props) => {
  const [isFullscreen, setFullscreen] = useState(false);
  const [seletedItem, setItem] = useState<any>({ id: 0, img: "" });
  const animate = useAnimationControls();

  const sequence = async () => {};

  const clickHanlder = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    { img, id }: Item
  ) => {
    event.preventDefault();
    setItem({ id, img });
    sequence();
  };

  return (
    <AnimatePresence>
      {(!!seletedItem || (seletedItem.id as number) === id) && (
        <motion.li
          layout
          exit={{ opacity: 0, y: 60, zIndex: -2 }}
          transition={{
            duration: 0.5,
            type: "tween",
            ease: "circOut",
          }}
          data-is-fullscreen={isFullscreen}
        >
          <Link to="/" onClick={(event) => clickHanlder(event, { id, img })}>
            Portfolio
          </Link>
          <motion.div layout>
            <motion.img animate={animate} src={img} />
          </motion.div>
        </motion.li>
      )}
    </AnimatePresence>
  );
};

export default Image;
