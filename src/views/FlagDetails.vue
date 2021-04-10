<template>
    <LayoutDefault>
        <DetailsFlag :details = 'details'></DetailsFlag>
    </LayoutDefault>
</template>

<script>
import DetailsFlag from '../components/DetailsFlag'
import LayoutDefault from '../layouts/LayoutDefault'
import { mapState, mapActions } from 'vuex'

    export default {
        name: "FlagDetails",
        components: {
            DetailsFlag,
            LayoutDefault
        },
        props:['id'],
        data(){
            return{
                //details: []
            }
        },
        computed:{
            /*details(){
                return this.$store.state.details
            }*/
             ...mapState({
                details: (state) => state.details
            })
        },
        methods:{
            ...mapActions({
                getFlagDetails: 'flags/getFlagDetails'
            })
        },
        async mounted(){
            /*try{
                let response = await Services.getDetails(this.id);
                this.details = response.data;
            }catch(e){
                console.log(e)
            }*/
            try{
                await this['getFlagDetails'](this.id)
                //await this.$store.dispatch('getFlagDetails',this.id)
            }catch(e){
                console.log(e)
            }
        },
        async beforeRouteUpdate(to,from,next)
        {
          /*try{
                let response = await Services.getDetails(to.params.id);
                this.details = response.data;
                next()
          }
          catch(e){
            next()
          }*/
          try{
                await this['getFlagDetails'](to.params.id)
                //await this.$store.dispatch('getFlagDetails',to.params.id)
                next()
          }
          catch(e){
            next()
          }
        },
        
        
    }
</script>

<style lang="scss" scoped>

</style>