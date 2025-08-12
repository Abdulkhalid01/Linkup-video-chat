import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development" ? "https://linkup-video-chat.onrender.com" : "https://linkup-video-chat.onrender.com/api/api";

export const axiosinstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,// send cookis with the request
})