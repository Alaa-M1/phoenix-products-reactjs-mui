import { List } from "@mui/material";
import styled from "styled-components";

const StyledList = styled(List)`
padding: 5px;
margin-bottom: 10px;
ul {
  /* width: auto;
  margin-left: auto; */
}
li {
  margin-left: auto;
  margin: 0px 10px;
}
a{
  color:#000;
}
`;

export {StyledList}