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
import { LinkInfo } from "types";

const CustomDrawer = ({ links, isSmallScreen }: CustomDrawerProps) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const drawerLinks: Array<LinkInfo> = [
    ...links,
    { path: "/login", label: "" },
    { path: "/login", label: "Login" },
    { path: "/signup", label: "Signup" },
  ];
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
              {drawerLinks.map((link, index) => {
                if (link.label !== "")
                  return (
                    <ListItemButton key={index} onClick={() => setOpen(false)}>
                      <Link style={{ width: "100%" }} to={link.path}>
                        {link.label}
                      </Link>
                    </ListItemButton>
                  );
                return <div style={{textAlign:'left', color:'#fff'}}>{`__________________`}</div>;
              })}
            </StyledList>
          </Drawer>
        </>
      ) : null}
    </>
  );
};

export default CustomDrawer;
