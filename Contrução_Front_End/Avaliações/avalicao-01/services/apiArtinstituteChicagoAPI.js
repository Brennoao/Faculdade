import axios from "axios";

const apiArtinstituteChicagoAPI = axios.create({
    baseURL: 'https://api.artic.edu/api/v1',
})

export default apiArtinstituteChicagoAPI