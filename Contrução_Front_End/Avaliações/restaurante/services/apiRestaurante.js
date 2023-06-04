import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'http://127.0.0.1:3333',
    headers: {
        Authorization: 'Bearer ' + 'MQ.X1iLLK9mSoqDAkI9n7hQasxA0MWud-cR6yezem2cFWG98IEYlNANqCJ6a1Z0'
    }
})

export default apiFilmes