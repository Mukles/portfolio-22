import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to={"/about"}>À Propos</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
