import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

type LinkComponentProps = LinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    isActive: boolean;
  };
const LinkComponent = (props: LinkComponentProps) => {
  return (
    <li>
      <Link {...props}></Link>
    </li>
  );
};
const StyledLink = styled(LinkComponent)`
  font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
  color: #fff;
  text-decoration: none;
  li {
    margin-left: auto;
    display: inline-block;
    margin: 0px 10px;
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;

export { StyledLink };
