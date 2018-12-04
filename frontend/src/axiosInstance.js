import axios from "axios";

const instance = axios.create({
    baseURL: "/api",
    headers: {
        //SOME TESTS MAY BE NEEDED
        Authorization: localStorage.getItem("token")
    },
    timeout: 20000
});

export default instance;