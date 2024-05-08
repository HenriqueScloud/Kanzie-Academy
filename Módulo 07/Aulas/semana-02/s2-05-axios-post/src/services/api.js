import axios from "axios"

export const API = axios.create({
  baseURL: "https://contact-fake-api.onrender.com",
  timeout: 8000,
});