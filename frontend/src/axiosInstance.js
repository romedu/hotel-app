import axios from "axios";

const instance = axios.create({
    baseURL: "/api",
    headers: {
        Authorization: localStorage.getItem("token")
    },
    timeout: 20000
});

export default instance;