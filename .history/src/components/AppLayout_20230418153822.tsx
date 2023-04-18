import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: #22f;
  padding: 5px;
  display: flex;
  margin-bottom: 10px;
  ul {
    display: inline-block;
    width: auto;
    margin-left: auto;
  }
  li {
    margin-left: auto;
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
