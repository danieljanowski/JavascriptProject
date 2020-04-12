<template>
    <div class="fav-container" v-if="favPlanet">
        <h1>Favourite Planets</h1>
        <ul v-for="(planet, index) in favPlanet" :planet="planet" :key="index">
           <li>{{planet}}</li>
        </ul>
    </div>
</template>


<script>
import PlanetService from '@/services/PlanetService';
import PlanetDetail from '../components/PlanetDetail';

export default {
    name: 'fav-planets',
    props:['favPlanet'],
    components:{
        "planet-detail": PlanetDetail
    }, 
    
    
}
</script>

<style scoped>
.fav-container{background-color: #27292D;
                        color: #EEEEEE;
                        border-style: none;
                        border-radius: 12px;
                        padding: 2%;
                        text-align: center;
                        margin: 2%;}
                        
ul {
  list-style-type: none;
}
 

</style>