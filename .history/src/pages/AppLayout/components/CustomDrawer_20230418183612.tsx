import { useState } from "react";
import { CustomDrawerProps } from "../types";
import Drawer from '@mui/material/Drawer';
import {List,ListItemButton,ListItemIcon,ReviewsIcon,ListItemText} from '@mui/material'

const CustomDrawer=({links}: CustomDrawerProps)=>{
    const[open,setOpen]=useState(false)
    return <>
    <Drawer open={open} variant="permanent" anchor="left" onClick={()=>setOpen(false)}>

      <List>
              {links.map((link, index) => (
                <ListItemButton key={index}>
                  <ListItemIcon>
                    <ReviewsIcon></ReviewsIcon>
                  </ListItemIcon>
                  <ListItemText>{link}</ListItemText>
                </ListItemButton>
              ))}
            </List>
    </Drawer>
    </>

}