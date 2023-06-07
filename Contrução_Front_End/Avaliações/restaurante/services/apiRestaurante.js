import axios from "axios";

const apiRestaurante = axios.create({
    baseURL: 'http://127.0.0.1:3333',
    headers: {
        Authorization: 'Bearer ' + process.env.APIKEY
    }
})

export default apiRestaurante