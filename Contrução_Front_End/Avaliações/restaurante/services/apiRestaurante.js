import axios from "axios";

const apiRestaurante = axios.create({
    baseURL: 'http://127.0.0.1:3333',
    headers: {
        Authorization: 'Bearer ' + 'MQ.oRoIx9vl7HQAe9wR7MR043AWI5a3SqOhoQik-t7lqt7CcCtMhdkZXiDLebEJ'
    }
})

export default apiRestaurante