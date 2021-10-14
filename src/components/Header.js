import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Link to="/">Wello World</Link>
      <ul className="navbar">
        <li>
          <Link to="/art">Art</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/geography">Geography</Link>
        </li>
        <li>
          <Link to="/mythology">Mythology</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
