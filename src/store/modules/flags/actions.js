import Services from '../../../services'

export default{
    
    async getFlags({commit}){
        let response = await Services.getAll();
        commit('SET_Flags', response.data)
    },
    async getFlagDetails({commit}, id){
        let response = await Services.getDetails(id);
        commit('SET_Flags_Details', response.data) 
    }
}