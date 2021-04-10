import Vue from "vue"
import Vuex from "vuex"
import flags from "./modules/flags/store"


Vue.use(Vuex)

const store = new Vuex.Store({
    modules :{
        flags : flags
    }
})

export default store