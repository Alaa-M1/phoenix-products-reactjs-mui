import { Link } from "react-router-dom";

const AppLayout = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Software Review</Link>
        </li>
        <li>
          <Link to="/Products">Products</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AppLayout;
