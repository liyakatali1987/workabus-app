import { atom, useAtom } from "jotai";
import { axiosRequest } from "./AxiosClient";

// // ----------------------------------------------------------------
// // AUTH0 API CONFIGURATION
// // ----------------------------------------------------------------


const DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
const AUTH_API_BASE_URL = `https://${DOMAIN}`;
const AUTH_API_CLIENT = import.meta.env.VITE_AUTH_API_CLIENT_ID;
const AUTH_API_SECRET = import.meta.env.VITE_APP_AUTH_CLIENT_SECRET;
const API_AUDIENCE = `https://${DOMAIN}/api/v2/`;

export const Auth0Api = {

  getAuthToken: async function getAuthToken() {
    let token;
    await axiosRequest({
      api: `${AUTH_API_BASE_URL}/oauth/token`,
      req_type: 'post',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        client_id: AUTH_API_CLIENT,
        client_secret: AUTH_API_SECRET,
        audience: API_AUDIENCE,
        grant_type: 'client_credentials',
      }
    }).then(response => {
      token = response.access_token;
    }).catch(err => {
      console.log(err);
    });

    return token;

  },

  getUsers: async function getUsers() {
    const token = await this.getAuthToken();
    let users;
    await axiosRequest({
      api: `${AUTH_API_BASE_URL}/api/v2/users`,
      req_type: 'get',
      headers: { Authorization: `Bearer  ${token}` }
    }).then(response => {
      users = response;
    }).catch(error => {
      console.log(error);
    });
    return users;
  }
  
}





