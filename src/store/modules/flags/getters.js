export default{
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
}