<template>
    <LayoutDefault>
        <Flags></Flags>
    </LayoutDefault> 
</template>

<script>
import Flags from '../components/Flags'
import LayoutDefault from '../layouts/LayoutDefault.vue'

    export default {
        name: "ListFlags",
        components: {
            Flags,
            LayoutDefault
        },
        data(){
            return{
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>