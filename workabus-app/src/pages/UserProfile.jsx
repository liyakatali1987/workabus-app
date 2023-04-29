import * as React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const theme = useTheme();
    const { user, isAuthenticated } = useAuth0();
    console.log(user);
    const navigate = useNavigate();
    if (!isAuthenticated) {
        navigate('/');
        return null;
    }

    if (!user.email_verified) {
        navigate('/email-verify')
    }

    console.log(user);

    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        Welcome {user.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Email Verifed  ----
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </Box>
            </Box>
        </Card>
    );
}

export default Profile;