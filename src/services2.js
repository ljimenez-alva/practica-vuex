import api from "./marvel-api"

export default{
    getComics(){
        return api.get('/comics')
    },
    getCharacters(){
        return api.get('/characters')
    }
}