import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

type LinkComponentProps = LinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    isActive: boolean;
  };
const LinkComponent = (props: LinkComponentProps) => {
  return <div><Link {...props}></Link></div>;
};
const StyledLink = styled(LinkComponent)`
  font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
  a {
    font-size: 33;
    color: "#fff";
    text-decoration: none;
  }
`;

export { StyledLink };
