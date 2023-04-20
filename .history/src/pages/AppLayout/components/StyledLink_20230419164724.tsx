import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

type LinkComponentProps = LinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    isactive: boolean;
  };
const LinkComponent = (props: LinkComponentProps) => {
  return <Link {...props}></Link>;
};
const StyledLink = styled(LinkComponent)`
  font-weight: ${(p) => (p.isactive ? "bold" : "normal")};
  text-decoration: none;
`;

export { StyledLink };
