import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  Link as MUILink,
} from "@mui/material";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AppLayoutProps } from "./types";
import CustomDrawer from "./components/CustomDrawer";
import { StyledLink, StyledNav } from "./components";
import { linksDetails } from "shared";

const AppLayout = ({ links }: AppLayoutProps) => {
  const { pathname } = useLocation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
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
            {isSmallScreen ? (
              <Grid item xs={12}>
                <Typography>
                  <AppShortcutIcon />
                </Typography>
              </Grid>
            ) : (
              <>
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
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={3}>
                  <Box sx={{ display: "flex" }}>
                    <MUILink
                      to="/login"
                      variant="button"
                      rel="noopener noreferrer"
                      component={Link}
                    >
                      <Button
                        sx={{
                          marginLeft: "auto",
                          backgroundColor: "rgba(9,75,121,1)",
                        }}
                        variant="contained"
                      >
                        Login
                      </Button>
                    </MUILink>
                    <MUILink
                      to="/signin"
                      variant="button"
                      rel="noopener noreferrer"
                      component={Link}
                    >
                      <Button
                        sx={{
                          marginLeft: "auto",
                          backgroundColor: "rgba(9,75,121,1)",
                        }}
                        variant="contained"
                      >
                        Signin
                      </Button>
                    </MUILink>
                  </Box>
                </Grid>
              </>
            )}
          </Grid>
          <CustomDrawer links={linksDetails} isSmallScreen={isSmallScreen} />
        </Toolbar>
      </AppBar>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
