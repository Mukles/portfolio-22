import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import images from "../assets/photo-folio-home_w_961.a36b7260.jpg";
import PrivacyScreen from "../Components/animate";
import Navbar from "../Components/navbar";
import Social from "../Components/social";

const Project = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section>
      <Social />
      <Navbar>
        {[
          { href: "/about", text: "À Propos" },
          { href: "/", text: "Project" },
        ]}
      </Navbar>
      <PrivacyScreen />

      <div className="container h-100">
        <div className="project">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, damping: 14 }}
          >
            Photo folio.
          </motion.h2>
          <div className="link">
            <Link to="/">VOIR LE SITE</Link>
          </div>
          <div className="content-container">
            <div>
              <h5>ANNÉE</h5>
              <p>2020</p>
            </div>
            <div>
              <h5>RÔLE</h5>
              <p>UX/UI Design</p>
              <p>Front-end Développement</p>
            </div>
            <div>
              <p>
                Passionné de Photo depuis des années, je me suis créé cette
                année un portfolio où je mets en avant mes clichés. De mes
                Pyrénées natales jusqu'en Nouvelle-Zélande, j'ai photographié
                les plus beaux paysages que j'ai eu la chance de contempler.
              </p>
            </div>
          </div>
        </div>

        <div ref={ref}>
          <motion.div style={{ y }} className="project-images">
            {Array(10)
              .fill("")
              .map((item, i) => {
                return (
                  <div key={i}>
                    <motion.img
                      whileInView={{ scale: 1 }}
                      initial={{ scale: 0.5 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      src={images}
                      alt="project-img"
                    />
                  </div>
                );
              })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;
