import styled from "styled-components";

const StyledNav = styled.nav`
padding: 5px;
display: flex;
margin-bottom: 10px;
height: 85px;
ul {
  display: inline-block;
  width: auto;
  margin: auto;
}
li {
  margin-left: auto;
  display: inline-block;
  margin: 0px 10px;
  list-style: none;
}
a{
  text-decoration: none;
  color:#fff;
}
`;

export {StyledNav}