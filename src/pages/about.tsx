//import me from "../assets/img/me.png";
import PrivacyScreen from "../Components/animate";
import Navbar from "../Components/navbar";

const About = () => {
  return (
    <section style={{ background: "#0E0D0B" }}>
      <Navbar>{[{ href: "/", text: "Project" }]}</Navbar>
      <PrivacyScreen />

      <div className="about-container">
        <div className="about-photo"></div>

        <div className="about-desc">
          <p>Hey ! Je suis Alexandre Fournou.</p>

          <div className="contact-info">
            <h2>CONTACT</h2>
            <p>
              <a href="mailto:someone@example.com">
                alexandre.fournou@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+4733378901">+47 333 78 901</a>
            </p>
          </div>

          <ul className="about-social">
            <li>
              <a className="hover" href="/">
                Instagram
              </a>
            </li>
            <li>
              <a className="hover" href="/">
                Linkdin
              </a>
            </li>
            <li>
              <a className="hover" href="/">
                GitHub
              </a>
            </li>
            <li>
              <a className="hover" href="/">
                Email
              </a>
            </li>
          </ul>
          <p>
            <a
              className="hover download-cv"
              href="/images/myw3schoolsimage.jpg"
              download
            >
              Download my resume
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
