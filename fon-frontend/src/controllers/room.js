import axios from "axios";

const getAll = async () => {
  try {
    const url = "/api/room";
    const result = await axios.get(url);
    return result;
  } catch (err) {
    return err;
  }
};

const getTop = async (amount) => {
  try {
    const url = `/api/room/top/${amount}`;
    const result = await axios.get(url);
    return result;
  } catch (err) {
    return err;
  }
};

const getOne = async (roomID) => {
  try {
    const url = `/api/room/${roomID}`;
    const result = await axios.get(url);
    return result;
  } catch (err) {
    return err;
  }
};

const roomController = {
  getAll,
  getTop,
  getOne,
};

export default roomController;
