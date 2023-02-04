import { Link } from "react-router-dom";
import PrivacyScreen from "../Components/animate";
import Social from "../Components/social";

const About = () => {
  return (
    <section>
      <PrivacyScreen />
      <Social />
      <div className="container h-100">
        <div className="about">
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
        </div>
      </div>
    </section>
  );
};

export default About;
