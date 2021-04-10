import Vue from 'vue'
import Vuex from 'vuex'
import Services from './services'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        regions:[
            'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
       ],
       flags: [],
       details: []      
    },
    getters:{
        filterCountries : state=> (search, region) => {
            let result = state.flags;
            
            if(region){
                result = result.filter(e=>e.region == region);
            }

            if(search){
                result = result.filter(e=> e.name.toLowerCase() == search.toLowerCase())
            }

            if(!result.length){
                result = state.flags;
            }

            return result;
        }

    },
    actions:{

        async getFlags({commit}){
            let response = await Services.getAll();
            commit('SET_Flags', response.data)
        },
        async getFlagDetails({commit}, id){
            let response = await Services.getDetails(id);
            commit('SET_Flags_Details', response.data) 
        }

    },
    mutations:{
        SET_Flags(state,payload){
            state.flags = payload
        },
        SET_Flags_Details(state,payload){
            state.details = payload
        }
    },
})

export default store