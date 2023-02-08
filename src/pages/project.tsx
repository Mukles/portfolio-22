import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import PrivacyScreen from "../Components/animate";
import Fotter from "../Components/fotter";
import Navbar from "../Components/navbar";
import Social from "../Components/social";
import { data } from "../data";

const Project = () => {
  const ref = useRef(null);
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const { scrollYProgress: opacityProgress } = useScroll({
    target: imgRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(opacityProgress, [0, 1], [1, 0]);

  const { project } = useParams();
  const projectDetails = data.find((item) => item.id === project);
  const { title, link, websiteName, year, role, discription, images } =
    projectDetails || {};

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
        <motion.div style={{ opacity }} className="project">
          <motion.h2
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              type: "spring",
              stiffness: 110,
              mass: 0.5,
            }}
          >
            {title}.
          </motion.h2>
          <div className="link">
            <a target={"_blank"} href={link} rel="noreferrer">
              VOIR LE SITE
            </a>
          </div>
          <div className="content-container">
            <div>
              <h5>{websiteName}</h5>
              <p>{year}</p>
            </div>
            <div>
              <h5>RÔLE</h5>
              {role?.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <div>
              <p>{discription}</p>
            </div>
          </div>
        </motion.div>

        <div ref={ref}>
          <motion.div style={{ y }} className="project-images">
            {images?.map((item, i) => {
              return (
                <div key={i}>
                  <motion.img
                    ref={i === 0 ? imgRef : null}
                    whileInView={{ scale: 1 }}
                    initial={{ scale: 0.7 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    src={item}
                    alt="project-img"
                  />
                </div>
              );
            })}

            <Fotter />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;
