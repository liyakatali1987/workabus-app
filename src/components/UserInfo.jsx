import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import { Avatar, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";

const UserInfo = () => {
    const { user, isAuthenticated } = useAuth0();
    if (isAuthenticated) {
        return (
            <div className="flex flex-wrap gap-2">
                <Dropdown
                    label={
                        <Avatar
                            rounded={true}
                            img={user.picture ? user.picture : "https://flowbite.com/docs/images/people/profile-picture-5.jpg"} >
                        </Avatar>
                    }
                    arrowIcon={false}
                    inline={true}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            {user.name}
                        </span>
                        <span className="block truncate text-sm font-medium">
                            {user.email}
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        <Link to="/profile">Profile</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Dashboard
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        <LogoutButton/>
                    </Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item>
                        <Link to="/admin">Admin</Link>
                    </Dropdown.Item>
                </Dropdown>
            </div>


        );
    }
    else {
        return <LoginButton />
    }

};

export default UserInfo;

