import axios from "axios";
import apiEndPoint from "../../constants";

const signIn = () => {
  return axios
    .get(apiEndPoint.LOGIN_ULR)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export default signIn;
