import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

type LinkComponentProps = LinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    isactive1: 'actiev'|'inActive';
  };
const LinkComponent = (props: LinkComponentProps) => {
  return <Link {...props}></Link>;
};
const StyledLink = styled(LinkComponent)`
  font-weight: ${(p) => (p.isactive1==='active' ? "bold" : "normal")};
  text-decoration: none;
`;

export { StyledLink };
