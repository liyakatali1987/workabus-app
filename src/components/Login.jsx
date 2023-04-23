import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const LoginButton = () => {
  const { loginWithRedirect} = useAuth0();
  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      }
    })
  };
  return (
      <Button onClick={handleLogin} variant="contained">SignUp/Login</Button>
  );
};

export default LoginButton;