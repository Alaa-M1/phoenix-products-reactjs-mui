import { CustomDrawerProps } from "../types";
import Drawer from "@mui/material/Drawer";
import {
  IconButton,
  Box,
  Typography,
  Link as MUILink,
  Button,
  List
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
            <List></List>
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <StyledLink
                      to="/login"
                      isActive={pathname === "/login"}
                    >
                      Login
                    </StyledLink>
                    <StyledLink
                      to="/signup"
                      isActive={pathname === "/signup"}
                    >
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
