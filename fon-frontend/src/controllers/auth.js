import axios from "axios";

const logIn = async (username, password) => {
  const url = "/api/auth/login";
  try {
    const result = await axios.post(url, { username, password });
    return result;
  } catch (err) {
    return err;
  }
};

const authController = {
  logIn,
};

export default authController;
