import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development" ?  "http://localhost:8800/api" : "https://tumhara-backend-url.onrender.com/api";

export const axiosinstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,// send cookis with the request
})