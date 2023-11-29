import axios from 'axios';

const DummyApi = axios.create({
    baseURL: "https://dummyjson.com",
});

export default DummyApi;