import axios from "axios";
export const API = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
  timeout: 8000,
});
