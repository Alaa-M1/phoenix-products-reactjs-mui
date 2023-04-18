import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  li {
    display: inline-block;
    margin: 0px 10px;
    list-style: none;
  }
  li a {
    text-decoration: none;
  }
`;
const AppLayout = () => {
  return (
    <>
      <StyledNav>
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
      </StyledNav>
      <Outlet />
    </>
  );
};

export default AppLayout;
