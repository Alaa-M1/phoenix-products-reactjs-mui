import { List ,AppBar, Toolbar, Grid, Typography } from "@mui/material";
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
const NavBar=()=>{
    return <AppBar>
        <Toolbar>
            <Grid container>
                <Grid item xs={2}>
                    <Typography>
                        <AppShortcutIcon/>
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <List>
                        
                    </List>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
}

export default NavBar;