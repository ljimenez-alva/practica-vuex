<template>
    <div>
         <div class="row">
            <div class="col-4">
                <div class="col-xs-12 col-lge-4 gy-3 px-5">
                    <input type="text"  v-model="search" placeholder="Search for a country" class="form-control">
                </div>
            </div>
            <div class="col-4"></div>
            <div class="col-4">
                <div class="col-xs-12 col-lge-4 gy-3 px-5">
                    <div class="form-floating">
                        <select v-model="region"
                            class="form-select">
                            <option
                                for="ListRegions"
                                v-for="reg in regions"
                                :key = "reg"
                                :value="reg">{{reg}}</option>
                        </select>
                        <label for="ListRegions">Filter By Region</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row px-5">
            <div v-for="f in filterCountries" :key="f.alpha3Code" class="col-xs-12 col-lg-3 gy-4">
                <FlagsList :flag = "f"></FlagsList>
            </div>
        </div>
    </div>
</template>

<script>
import FlagsList from "../components/FlagsList"
import {  mapActions, mapGetters } from 'vuex'

    export default {
        name: "Flags",
        components:{
            FlagsList
        },
        data(){
            return{
                
                /*regions:[
                     'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
                ],*/
                region: '',
                search: ''
            }
        },
        methods:{
            ...mapActions({
                getFlags: 'flags/getFlags'
            })
        },
        async mounted(){
            /*try{
                let response = await Services.getAll();
                this.flags = response.data;
            }catch(e){
                console.log(e)
            }*/
            try{
                
                await this['getFlags']()
                //await this.$store.dispatch('getFlags');
            }catch(e){
                console.log(e)
            }
        },
        computed:{
            /*...mapState({
                regions: 'flags/regions'
            }),*/
            ...mapGetters({
                 flagsList: 'flags/filterCountries'
            }),
            filterCountries(){
                return this.flagsList(this.search,this.region)
            },

            /*filterCountries(){
                let result = this.flags;
                
                if(this.region){
                    result = result.filter(e=>e.region == this.region);
                }

                if(this.search){
                    result = result.filter(e=> e.name.toLowerCase() == this.search.toLowerCase())
                }

                if(!result.length){
                    result = this.flags;
                }

                return result;
            },*/
            /** Segundo cambio **/
           
            regions(){
                return this.$store.state.regions;
            },
             /*filterCountries(){
                return this.$store.getters.filterCountries(this.search, this.region);
            },*/
            
        },
        
    }
</script>

<style scoped>
.div-margin{
    margin: 0%
}


</style>