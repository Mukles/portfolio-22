import me from "../assets/img/me.png";
import Navbar from "../Components/navbar";

const About = () => {
  return (
    <section>
      <Navbar>
        {[
          { href: "/about", text: "À Propos" },
          { href: "/", text: "Project" },
        ]}
      </Navbar>

      <div className="container">
        <div className="about-container">
          <img src={me} alt="Mukles Hossen" />
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
                {" "}
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
            <p>Téléchargez mon cv</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
