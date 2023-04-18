import { List } from "@mui/material";
import styled from "styled-components";

const StyledList = styled(List)`
  padding: 5px;
  margin-bottom: 10px;
  display: flex;
  width: 180px;
  ul {
    padding: 0px;
  }
  li {
    margin: 10px;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
`;

export { StyledList };
