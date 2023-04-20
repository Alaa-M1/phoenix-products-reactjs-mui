import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

type LinkComponentProps = LinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    isactive1: 'yes'|'no';
  };
const LinkComponent = (props: LinkComponentProps) => {
  return <Link {...props}></Link>;
};
const StyledLink = styled(LinkComponent)`
  font-weight: ${(p) => (p.isactive1==='yes' ? "bold" : "normal")};
  text-decoration: none;
`;

export { StyledLink };
