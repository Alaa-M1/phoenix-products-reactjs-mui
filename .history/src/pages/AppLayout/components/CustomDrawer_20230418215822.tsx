import { CustomDrawerProps } from "../types";
import Drawer from "@mui/material/Drawer";
import {
  IconButton,
  Box,
  Typography,
  Link as MUILink,
  Button,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link, useLocation } from "react-router-dom";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import { StyledList } from "./StyledList";
import { StyledLink } from "./StyledLink";

const CustomDrawer = ({ links, isSmallScreen }: CustomDrawerProps) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const drawerLinks=[...links,{path:'/login', label:'Login'},{path:'/signup', label:'Signup'}]
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

          <Drawer
            sx={{ width: "180px" }}
            open={open}
            anchor="left"
            onClose={() => setOpen(false)}
            PaperProps={{ sx: { backgroundColor: "rgba(9,75,121,1)" } }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography sx={{ marginTop: "5px", color: "#fff" }}>
                <AppShortcutIcon />
              </Typography>
            </Box>
            <StyledList
              sx={{ width: "100%", maxWidth: 360 }}
              aria-labelledby="nested-list-subheader"
            >
              {drawerLinks.map((link, index) => (
                <ListItemButton key={index}>
                  <Link to={link.path}>{link.label}</Link>
                </ListItemButton>
              ))}
            </StyledList>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <StyledLink to="/login" isActive={pathname === "/login"}>
                Login
              </StyledLink>
              <StyledLink to="/signup" isActive={pathname === "/signup"}>
                Signup
              </StyledLink>
            </Box>
          </Drawer>
        </>
      ) : null}
    </>
  );
};

export default CustomDrawer;
