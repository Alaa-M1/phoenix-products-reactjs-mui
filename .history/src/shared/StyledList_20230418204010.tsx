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
  margin: 10px;
  list-style: none;
}
a{
  color:#000;
}
`;

export {StyledList}