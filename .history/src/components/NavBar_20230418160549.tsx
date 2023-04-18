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
} from "@mui/material";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import ReviewsIcon from "@mui/icons-material/Reviews";
import InfoIcon from "@mui/icons-material/Info";

type NavBarProps = {
  links: Array<string>;
};
const NavBar = ({ links }: NavBarProps) => {
  const [tabIndex, setTabIndex] = useState(-1);
  return (
    <AppBar>
      <Toolbar>
        <Grid container style={{ placeItems: "center" }}>
          <Grid item xs={2}>
            <Typography>
              <AppShortcutIcon />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Tabs value={tabIndex} onChange={(e, val) => setTabIndex(val)} indicatorColor="secondary">
              {links.map((link, index) => (
                <Tab key={index} label={link} sx={{color:'#fff' }}/>
              ))}
            </Tabs>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
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
