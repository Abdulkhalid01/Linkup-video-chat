import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development" ?  "http://localhost:8800/api" : "https://linkup-video-chat.onrender.com/api";

export const axiosinstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,// send cookis with the request
})