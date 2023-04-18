import { CustomDrawerProps } from "../types";
import React , {useState} from 'react';
import Drawer from '@mui/material/Drawer'

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