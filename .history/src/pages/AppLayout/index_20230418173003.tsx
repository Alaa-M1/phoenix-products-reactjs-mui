import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Button,
  Box,
} from "@mui/material";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import { Outlet, useLocation } from "react-router-dom";
import { StyledLink, StyledNav } from "sharedComponents";
import { AppLayoutProps } from "./types";

const AppLayout = ({ links }: AppLayoutProps) => {
  const { pathname } = useLocation();
  return (
    <>
      <AppBar
        sx={{
          position: "relative",
          backgroundImage:
            "linear-gradient(90deg,rgba(0, 212, 255, 1) 0%,rgba(9, 75, 121, 1) 50%,rgba(0, 212, 255, 1) 100%)",
          marginBottom: "5px",
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
                  {links.map((link, index) => (
                    <li key={index}>
                      <StyledLink
                        to={link.path}
                        isActive={pathname === link.path}
                      >
                        {link.label}
                      </StyledLink>
                    </li>
                  ))}
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
                  sx={{
                    marginLeft: "auto",
                    backgroundColor: "rgba(9,75,121,1)",
                  }}
                  variant="contained"
                >
                  Login
                </Button>
                <Button
                  sx={{
                    marginLeft: "2px",
                    backgroundColor: "rgba(9,75,121,1)",
                  }}
                  variant="contained"
                >
                  Signup
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
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
