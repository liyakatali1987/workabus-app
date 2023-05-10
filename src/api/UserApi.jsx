import { axiosRequest } from "./AxiosClient";
import { API_BASE_URL } from "../Constants";


export const getUser = (email) => {
    const user_api = `${API_BASE_URL}/user/getUser`;
    return axiosRequest({
        api: user_api,
        params: {
            email: email
        }
    });
}

export const registerUser = (data) => {
    const params = {"user_type": 'worker'}
    const headers = {'Content-Type': 'application/json'}
    const register_api = `${API_BASE_URL}/user/registerUser`;
    return axiosRequest({
        api: register_api,
        req_type: 'POST',
        headers: headers,
        params: params,
        data: JSON.stringify(data)
    });
}