import { List } from "@mui/material";
import styled from "styled-components";

const StyledList = styled(List)`
padding: 5px;
margin-bottom: 10px;
display: flex;
background-image:
            "linear-gradient(90deg,rgba(0, 212, 255, 1) 0%,rgba(9, 75, 121, 1) 50%,rgba(0, 212, 255, 1) 100%)",
ul {
  padding: 0px;
}
li {
  margin: 10px;
  list-style: none;
}
a{
  color:#000;
}
`;

export {StyledList}