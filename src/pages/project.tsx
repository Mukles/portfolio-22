import { Link } from "react-router-dom";
import images from "../assets/photo-folio-home_w_961.a36b7260.jpg";
import PrivacyScreen from "../Components/animate";
import Navbar from "../Components/navbar";
import Social from "../Components/social";

const Project = () => {
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
          <h2>Photo folio.</h2>
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
          <div>
            <div className="project-images">
              <img src={images} alt="project-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
