import React, { useState } from "react";
import {
  Tabs,
  Tab,
  List,
  AppBar,
  Toolbar,
  Grid,
  Typography,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Button,
  Box,
} from "@mui/material";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import ReviewsIcon from "@mui/icons-material/Reviews";
import InfoIcon from "@mui/icons-material/Info";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

type AppLayoutProps = {
  links: Array<string>;
};

const StyledNav = styled.nav`
  background-color: #22f;
  padding: 5px;
  display: flex;
  margin-bottom: 10px;
  ul {
    display: inline-block;
    width: auto;
    margin-left: auto;
  }
  li {
    margin-left: auto;
    display: inline-block;
    margin: 0px 10px;
    list-style: none;
  }
  li a {
    text-decoration: none;
  }
`;

const AppLayout = ({ links }: AppLayoutProps) => {
  const [tabIndex, setTabIndex] = useState(-1);
  return (
    <>
      <AppBar>
        <Toolbar>
          <Grid container style={{ placeItems: "center" }}>
            <Grid item xs={2}>
              <Typography>
                <AppShortcutIcon />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <StyledNav>
                <ul>
                  <li>
                    <Link to="/">Software Review 11</Link>
                  </li>
                  <li>
                    <Link to="/Products">Products</Link>
                  </li>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                </ul>
              </StyledNav>
              {/* <Tabs value={tabIndex} onChange={(e, val) => setTabIndex(val)} indicatorColor="secondary" textColor="secondary">
              {links.map((link, index) => (
                <Tab key={index} label={link} sx={{color:'#fff' }}/>
              ))}
            </Tabs> */}
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={3}>
              <Box sx={{ display: "flex" }}>
                <Button
                  sx={{ marginLeft: "auto" }}
                  variant="contained"
                  color="secondary"
                >
                  Login
                </Button>
                <Button
                  sx={{ marginLeft: "2px" }}
                  variant="contained"
                  color="secondary"
                >
                  Signup
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default AppLayout;
{
  /* <List>
              {links.map((link, index) => (
                <ListItemButton key={index}>
                  <ListItemIcon>
                    <ReviewsIcon></ReviewsIcon>
                  </ListItemIcon>
                  <ListItemText>{link}</ListItemText>
                </ListItemButton>
              ))}
            </List> */
}
