import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Software Review 11</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default AppLayout;
