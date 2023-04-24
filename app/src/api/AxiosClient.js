import axios from "axios";

async function axiosRequest({ api = "", headers = {}, req_type = "get", data = {} }) {
    var resp_data = "";

    var options = {
      method: req_type.toUpperCase(),
      url: api,
      headers: headers,
      data: new URLSearchParams(data)
    };
  
    await axios.request(options).then(function (response) {
      resp_data = response.data;
    }).catch(function (error) {
      console.error(error);
    });
    return resp_data;
  };

  export {axiosRequest};