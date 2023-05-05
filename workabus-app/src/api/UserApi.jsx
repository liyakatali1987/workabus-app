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
