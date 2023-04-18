import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

type LinkComponentProps = LinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    isActive: boolean;
  };
const LinkComponent = (props: LinkComponentProps) => {
  return <Link {...props}></Link>;
};
const StyledLink = styled(LinkComponent)`
  font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
  color:'#fff';
  a {
    text-decoration: none;
  }
`;

export { StyledLink };
