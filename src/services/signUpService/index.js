import axios from "axios";
import apiEndPoint from "../../constants";

const signUp = (request) => {
  return axios({
    method: "post",
    url: apiEndPoint.SIGNUP_URL,
    data: request.user,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export default signUp;
