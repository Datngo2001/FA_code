import React, { useState } from "react";
import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ListItemNavLink from "../ListItemNavLink/ListItemNavLink";
import MenuIcon from "@mui/icons-material/Menu";
import AppNavLink from "../AppNavLink/AppNavLink";

const navItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Higher Order Component",
    link: "/higher-order-function",
  },
];

function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu((val) => !val);
  };

  return (
    <AppBar component="nav" sx={{ position: "relative" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { sm: "block" } }}
        >
          My demo
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ display: { sm: "none" } }}
          onClick={toggleMenu}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <AppNavLink key={item.title} text={item.title} to={item.link} />
          ))}
        </Box>
      </Toolbar>
      <Drawer anchor="right" open={isOpenMenu} onClose={toggleMenu}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {navItems.map((item) => (
              <ListItemNavLink
                handleClick={toggleMenu}
                key={item}
                text={item.title}
                to={item.link}
              />
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navigation;
