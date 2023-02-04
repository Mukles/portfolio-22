import { motion, useIsPresent } from "framer-motion";

const PrivacyScreen = () => {
  const isPresent = useIsPresent();

  return (
    <>
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0, transition: { duration: 1, ease: "circOut" } }}
        exit={{ scaleY: 1, transition: { duration: 1, ease: "circIn" } }}
        style={{ originY: isPresent ? 0 : 1 }}
        className="privacy-screen"
      >
        <div />
        <div />
      </motion.div>
    </>
  );
};

export default PrivacyScreen;
