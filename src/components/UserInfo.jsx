import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import { Tooltip, Box, Menu, IconButton, Avatar, MenuItem, Typography, Divider } from '@mui/material';
import { Link } from "react-router-dom";
import { async } from "regenerator-runtime";

const UserInfo = () => {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    
    getAccessTokenSilently().then( (token) => {
        console.log("Access token", token, 'End token');
    } )

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    if (isAuthenticated) {
        return (
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title={user.name}>
                    <IconButton
                        sx={{ p: 0 }}
                        onClick={handleOpenNavMenu}
                        src={user.picture}
                    >
                        <Avatar alt="" src={user.picture} />
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
                        <Link to="/profile">Profile</Link>
                    </MenuItem>
                    <MenuItem key="Logout" onClick={handleCloseNavMenu}>
                        <LogoutButton />
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

