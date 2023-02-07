import { motion, useIsPresent } from "framer-motion";

const PrivacyScreen = () => {
  const isPresent = useIsPresent();

  return (
    <motion.ul
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0, transition: { duration: 0.3, ease: "linear" } }}
      exit={{ scaleY: 1, transition: { duration: 0.3, ease: "linear" } }}
      style={{ originY: isPresent ? 0 : 1 }}
      className="privacy-screen"
    />
  );
};

export default PrivacyScreen;
