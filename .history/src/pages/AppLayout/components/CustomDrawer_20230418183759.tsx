
import { CustomDrawerProps } from "../types";
import Drawer from '@mui/material/Drawer';
import {List,ListItemButton,ListItemIcon,ListItemText, IconButton} from '@mui/material'
import { useState } from "react";

const CustomDrawer=({links}: CustomDrawerProps)=>{
    const[open,setOpen]=useState(false)
    return <>
    <Drawer open={open} variant="permanent" anchor="left" onClick={()=>setOpen(false)}>

      <List>
              {links.map((link, index) => (
                <ListItemButton key={index}>
                  {/* <ListItemIcon>
                    <ReviewsIcon></ReviewsIcon>
                  </ListItemIcon> */}
                  <ListItemText>{link.label}</ListItemText>
                </ListItemButton>
              ))}
            </List>
    </Drawer>
    <IconButton aria-label="" onClick={}>
      
    </IconButton>
    </>

}

export default CustomDrawer;