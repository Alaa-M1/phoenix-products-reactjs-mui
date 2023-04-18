import { AppBar, Toolbar, Grid, Typography } from "@mui/material";
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
const NavBar=()=>{
    return <AppBar>
        <Toolbar>
            <Grid container>
                <Grid item xs={3}>
                    <Typography>
                        <AppShortcutIcon/>
                    </Typography>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
}

export default NavBar;