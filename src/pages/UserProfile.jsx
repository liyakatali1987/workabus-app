import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {
    CardContent,
    Typography,
    CircularProgress,
    Box,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel
} from '@mui/material';

import { AppButton, AppCard } from '../components/custom/CustomStyles';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../api/UserApi';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    const [userData, setUserData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [profileType, setProfileType] = useState("worker")
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchUserData() {
            setIsLoading(true);
            try {
                const { email } = user;
                const data = await getUser(email);
                setUserData(data);
            } catch (error) {
                console.error(error);
            }
            setIsLoading(false);
        }

        if (!isAuthenticated) {
            return;
        }

        if (!user.email_verified) {
            navigate('/email-verify');
            return;
        }

        if (!userData) {
            fetchUserData();
            return;
        }
    }, [isAuthenticated, navigate, user, userData]);

    if (!isAuthenticated) {
        return null;
    }

    if (!userData) {
        return <CircularProgress />;
    }

    const completeProfile = () => {
        const path = `/profile/${profileType}`;
        console.log(path);
        navigate(path, {state:userData});
    };

    return (
        <div style={{ justifyContent: 'center' }}>
            <AppCard>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography style={{ left: 0 }}>
                            Welcome, {userData.email}
                        </Typography>
                        <Typography sx={{ color: userData.profile_complete ? 'green' : 'red' }} component="span">
                            PROFILE STATUS:  {userData.profile_complete ? 'COMPLETE' : 'INCOMPLETE'}
                        </Typography>
                    </CardContent>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        {!userData.profile_complete &&
                            <Typography variant="body1" component="div">
                                <FormControl>
                                    <FormLabel sx={{ marginRight: 2 }}>Select Registration Type</FormLabel>
                                    <RadioGroup 
                                        row
                                        defaultValue="worker"
                                        onChange={ (e , value) => {
                                            setProfileType(value);
                                        } }
                                    >
                                        <FormControlLabel
                                            id="worker"
                                            value="worker"
                                            control={<Radio />}
                                            label="Worker"
                                        />
                                        <FormControlLabel
                                            id="company"
                                            value="company"
                                            control={<Radio />}
                                            label="Company"
                                        />
                                    </RadioGroup>
                                    <AppButton 
                                        variant='contained' 
                                        size='small'
                                        onClick={completeProfile}
                                        sx={{ marginTop: '5px' }}>
                                        Complete Profile
                                    </AppButton>
                                </FormControl>
                            </Typography>
                        }
                    </CardContent>

                </Box>
            </AppCard>
        </div>
    );
}

export default Profile;
