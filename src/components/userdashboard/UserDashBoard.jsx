import React, { useState } from 'react';
import { Box, Typography, Avatar, IconButton, Tooltip, Tab, Tabs } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { camalize } from '../utilities/utils';
import About from './About';
import Certificates from './Certificates';
import Licenses from './Licenses';

const UserDashboard = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue);
    };

    const editProfile = () => {
        navigate('/profile/worker');
        return;
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: 1,
                borderRadius: 2,
                padding: 5,
                width: 'auto',
                height: 'auto',
                margin: 'auto',
                marginLeft: 25,
                marginRight: 25,
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar
                    alt="User Image"
                    src="/icon.png"
                    variant="circular"
                    sx={{
                        border: 1,
                        width: 100,
                        height: 100,
                        padding: 3,
                    }}
                />
            </Box>

            <Tooltip placement="bottom" title="Edit Profile">
                <IconButton
                    alt="Edit Profile"
                    color="primary"
                    placement="bottom"
                    onClick={editProfile}
                >
                    <EditIcon />
                </IconButton>
            </Tooltip>

            <Typography variant="h6" sx={{ marginTop: '5px' }}>
                {camalize(state.firstName)} {camalize(state.lastName)}
            </Typography>

            <Box sx={{ width: 'auto' }}>
                <Tabs value={currentTab} onChange={handleTabChange}>
                    <Tab label="About" />
                    <Tab label="Licenses" />
                    <Tab label="Certificates" />
                </Tabs>
                {/* Render different content based on the selected tab */}
                {currentTab === 0 && <About/>}
                {currentTab === 1 && <Licenses/>}
                {currentTab === 2 && <Certificates/>}
            </Box>


        </Box>
    );
};

export default UserDashboard;
