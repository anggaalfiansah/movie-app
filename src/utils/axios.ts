import axios from "axios";
import { BASE_URL } from "constant/config";

const instance = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default instance;
