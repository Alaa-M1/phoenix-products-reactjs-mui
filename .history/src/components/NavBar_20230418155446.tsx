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
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import ReviewsIcon from '@mui/icons-material/Reviews';
import InfoIcon from '@mui/icons-material/Info';

type NavBarProps={
    links: Array<string>;
}
const NavBar = ({links}: NavBarProps) => {
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
                <ListItemIcon><ReviewsIcon></ReviewsIcon></ListItemIcon>
                <ListItemText>Pro</ListItemText>
              </ListItemButton>
            </List>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
