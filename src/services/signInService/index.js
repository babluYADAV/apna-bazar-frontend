import axios from "axios";
import apiEndPoint from "../../constants";

const signIn = (request) => {
  return axios
    .post(apiEndPoint.LOGIN_URL, request.user)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export default signIn;
