import { CustomDrawerProps } from "../types";
import Drawer from "@mui/material/Drawer";
import {
  List,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  Typography,
  ListItemButton,
} from "@mui/material";
import { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link, useLocation } from "react-router-dom";
import { StyledLink, StyledList } from "shared";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";

const CustomDrawer = ({ links, isSmallScreen }: CustomDrawerProps) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
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

          <Drawer sx={{position:""}} open={open} anchor="left" onClose={() => setOpen(false)} PaperProps={{sx:{backgroundColor:
            "rgba(9,75,121,1)",}}}>
              <Box sx={{display:'flex', flexDirection:'columns', alignItems:'center'}}></Box>
              <Typography>
                <AppShortcutIcon />
              </Typography>

            <StyledList>
              <ul>
                {links.map((link, index) => (
                  <li key={index}>
                    <StyledLink
                      to={link.path}
                      isActive={pathname === link.path}
                    >
                      {link.label}
                    </StyledLink>
                  </li>
                ))}
              </ul>
            </StyledList>
          </Drawer>
        </>
      ) : null}
    </>
  );
};

export default CustomDrawer;
