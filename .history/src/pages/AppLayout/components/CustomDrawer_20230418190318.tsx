import { CustomDrawerProps } from "../types";
import Drawer from "@mui/material/Drawer";
import {
  List,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  ListItemButton,
} from "@mui/material";
import { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";
const CustomDrawer = ({ links, isSmallScreen }: CustomDrawerProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {isSmallScreen ? (
        <>
          <IconButton
            aria-label="Open menu drawer"
            onClick={() => setOpen(true)}
          >
            <MenuOutlinedIcon></MenuOutlinedIcon>
          </IconButton>

          <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
            <List>
              {links.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </List>
          </Drawer>
        </>
      ) : null}
    </>
  );
};

export default CustomDrawer;
