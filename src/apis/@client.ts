import axios from "axios";

const client = axios.create({
  baseURL: "https://kbdara.shop",
});

export default client;
