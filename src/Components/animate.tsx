import { motion, useIsPresent } from "framer-motion";

const PrivacyScreen = () => {
  const isPresent = useIsPresent();

  return (
    <motion.ul
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0, transition: { duration: 0.8, ease: "circOut" } }}
      exit={{ scaleY: 1, transition: { duration: 0.8, ease: "circIn" } }}
      style={{ originY: isPresent ? 0 : 1 }}
      className="privacy-screen"
    />
  );
};

export default PrivacyScreen;
