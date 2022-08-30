import axios from "axios";

const client = axios.create({
  baseURL: "https://kbdara.shop",
  // withCredentials: true,
});

export default client;
