import { Link } from "react-router-dom";

interface Props {
  children: Array<any>;
}

const Navbar = ({ children }: Props) => {
  return (
    <header>
      <ul>
        {children.map((item, i) => {
          return (
            <li key={i}>
              <Link className="hover" to={item.href}>
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Navbar;
