import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

type LinkComponentProps = LinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    isActive: boolean;
  };
const LinkComponent = (props: LinkComponentProps) => {
  return (
    <div>

    <li>
      <Link {...props}></Link>
    </li>
    </div>
  );
};
const StyledLink = styled(LinkComponent)`
  font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
  text-decoration: none;
  & li {
    margin-left: auto;
    display: inline-block;
    margin: 0px 10px;
    list-style: none;
  }
  & a {
    text-decoration: none;
  }
`;

export { StyledLink };
