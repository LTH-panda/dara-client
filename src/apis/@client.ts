import axios from "axios";

const client = axios.create({
  baseURL: "https://kbdara.shop",
  // withCredentials: true,
});

export const setAccessToken = (accessToken: string) => {
  client.defaults.headers.common["X-ACCESS-TOKEN"] = accessToken;
};

export default client;
