import axios from "axios";

export const api = axios.create({
    baseURL: "https://todolist-fake-api.onrender.com/api/",
    timeout: 8 * 1000,
})