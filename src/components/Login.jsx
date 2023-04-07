import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AppButton from "../partials/Button";

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
      <AppButton clickEvent={handleLogin} text="Sign Up/Login" />
  );
};

export default LoginButton;