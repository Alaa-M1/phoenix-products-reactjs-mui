import { CustomDrawerProps } from "../types";
import Drawer from "@mui/material/Drawer";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
const CustomDrawer = ({ links }: CustomDrawerProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer
        open={false}
        variant="permanent"
        anchor="left"
        onClose={() => setOpen(false)}
      >
        
      </Drawer>
      <IconButton aria-label="Open menu drawer" onClick={() => setOpen(true)}>
        <MenuOutlinedIcon></MenuOutlinedIcon>
      </IconButton>
    </>
  );
};

export default CustomDrawer;
