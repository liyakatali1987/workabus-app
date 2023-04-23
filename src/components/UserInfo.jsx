import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import { Tooltip, Box, Menu, IconButton, Avatar, MenuItem, Typography, Divider } from '@mui/material';
import { Link } from "react-router-dom";
import { useState } from "react";

const UserInfo = () => {
    const { user, isAuthenticated } = useAuth0();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    if (isAuthenticated) {
        return (
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title={user.name}>
                    <IconButton 
                    sx={{ p: 0 }}
                    onClick={handleOpenNavMenu}
                    >
                        <Avatar alt="Remy Sharp" src={user.picture} />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    anchorEl={anchorElNav}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                >
                    <MenuItem key="Username" onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{user.name}</Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem key="Profile" onClick={handleCloseNavMenu}>
                        <Link to="/profile" >Profile</Link>
                    </MenuItem>
                    <MenuItem key="Admin" onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{user.name}</Typography>
                    </MenuItem>
                    <MenuItem key="Logout" onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">Logout</Typography>

                    </MenuItem>
                </Menu>
            </Box>
        )
    }
    else {
        return <LoginButton />
    }
};

export default UserInfo;

