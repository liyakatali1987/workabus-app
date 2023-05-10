import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {
    Typography,
    CircularProgress,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Grid,
    Box,
    Paper
} from '@mui/material';

import { AppButton, AppCard, AppCardContent } from '../components/custom/CustomStyles';
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
        navigate(path, { state: userData });
    };

    const redirectedUser = () => {
        if (profileType === 'worker')
        {
            navigate('/userdashboard', { state: userData });
        }
        else if (profileType === 'company') {
            navigate('/companydashboard', { state: userData });
        }
    };

    return (
        <AppCard>
            <Grid container sx={{ justifyContent: 'center', margin: 'auto' }} display="inline-block">
                <AppCardContent>
                    <Paper sx={{ border: 1, borderRadius: 2, width: '100%', paddingLeft: 5, paddingTop: 2, paddingBottom: 2 }} display="inline-block">
                        Welcome, {userData.email}
                        <Typography sx={{ color: userData.profile_complete ? 'green' : 'red', alignContent: 'end', paddingLeft: 105 }} component="span">
                            PROFILE STATUS:  {userData.profile_complete ? 'COMPLETE' : 'INCOMPLETE'}
                        </Typography>
                    </Paper>
                </AppCardContent>
                <AppCardContent>
                    <Grid container sx={{ justifyContent: 'center', margin: 'auto' }} display="inline-block">
                        {(!userData.profile_complete || userData.edit_profile) &&
                            <FormControl>
                                <FormLabel sx={{ marginRight: 2 }}>Select Registration Type</FormLabel>
                                <RadioGroup
                                    row
                                    defaultValue="worker"
                                    onChange={(e, value) => {
                                        setProfileType(value);
                                    }}
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
                        
                    }
                    {redirectedUser()}
                    </Grid>
                </AppCardContent>
            </Grid>
        </AppCard>
    );
}

export default Profile;
