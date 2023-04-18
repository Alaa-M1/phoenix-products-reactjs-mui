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
import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { StyledLink, StyledNav } from "sharedComponents";

type AppLayoutProps = {
  links: Array<string>;
};

const StyledAppBar = styled(AppBar)`
  position: relative;
  background-image: linear-gradient(
    90deg,
    rgba(0, 212, 255, 1) 0%,
    rgba(9, 75, 121, 1) 50%,
    rgba(0, 212, 255, 1) 100%
  );
`;
const AppLayout = ({ links }: AppLayoutProps) => {
  const { pathname } = useLocation();
  return (
    <>
      <header>
        <AppBar
          sx={{
            position: "relative",
            backgroundImage:
              "linear-gradient(90deg,rgba(0, 212, 255, 1) 0%,rgba(9, 75, 121, 1) 50%,rgba(0, 212, 255, 1) 100%)",
          }}
        >
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
                      <StyledLink to="/" isActive={pathname === "/"}>
                        Software Review 11
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink
                        to="/Products"
                        isActive={pathname === "/Products"}
                      >
                        Products
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink
                        to="/about-us"
                        isActive={pathname === "/about-us"}
                      >
                        About Us
                      </StyledLink>
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
                    color="rgba(9,75,121,1)"
                  >
                    Login
                  </Button>
                  <Button
                    sx={{ marginLeft: "2px" }}
                    variant="contained"
                    color="rgba(9,75,121,1)"
                  >
                    Signup
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </header>
      <main>
        <Outlet />
      </main>
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
