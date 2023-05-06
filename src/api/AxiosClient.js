import axios from "axios";

async function axiosRequest({ api = "", headers = {}, req_type = "get", params = {}, data = {} }) {
  
  const options = {
    method: req_type.toUpperCase(),
    url: api,
    headers: headers,
    data: new URLSearchParams(data),
    params: params,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export { axiosRequest };
