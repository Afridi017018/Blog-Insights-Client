import axios from "axios"

const instance = axios.create({
    baseURL: "https://blog-website-server-a11.vercel.app/api/v1",
    withCredentials: true,
})


const useAxios = () => {
    return instance;
};

export default useAxios;