import {
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
const NavBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Grid container style={{placeItems: 'center'}}>
          <Grid item xs={2}>
            <Typography>
              <AppShortcutIcon />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <List>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText>Hello</ListItemText>
              </ListItemButton>
            </List>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
