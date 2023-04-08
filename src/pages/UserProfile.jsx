import React, { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import { Label } from 'flowbite-react';


const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const isProfileComplete = false;
    const showCompleteProfile = () => {
        console.log('Complete profile');
        return (
            <div>
                <div><Label>Select Profile Type</Label></div>
                <div><Label>Select Profile Type</Label></div> 
                <div><Label>Select Profile Type</Label></div> 
                <div><Label>Select Profile Type</Label></div>
                <div><Label>Select Profile Type</Label></div>
            </div>
        )
    }

    if (!isProfileComplete) {
        return (
            <div>
                <Link onClick={ () => {showCompleteProfile()}}>Complete your Profile</Link>
            </div>
        )
    }
}

export default Profile