import Vue from "vue"
import Router from "vue-router"
import NotFound from "./views/NotFound"
import ListFlags from "./views/ListFlags"
import FlagDetails from "./views/FlagDetails"


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'flags',
            component: ListFlags,
            props: true, 
            
        },
        {
            path: '/details/:id',
            name: 'flag-details',
            component: FlagDetails,
            props: true
        },
        {
            path: '*',
            name: 'not-found',
            component : NotFound
        },
        
    ]
})