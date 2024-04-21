import axios from "axios";


export default axios.create({
    baseURL: 'https://text-translator2.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': 'acd257a390mshc36fbf0e17b4a24p198b66jsnf222ca17be11',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    }
})
