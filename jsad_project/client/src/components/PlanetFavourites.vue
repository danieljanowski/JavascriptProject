<template>
    <div class="fav-container" v-if="favPlanet">
        <h1>Favourite Planets</h1>
        <ul v-for="(planet, index) in favPlanet" :planet="planet" :key="index">
           <h1>{{planet.name}}</h1>
           <li>Diameter in km: {{planet.diameter}}</li>
           <li>Distance from Sun in million of km: {{ planet.distance_from_sun }}</li>
           <li>Number of moons: {{ planet.number_of_moons }}</li>
           <li>Day length in Earth hours: {{ planet.day_length }}</li>
           <li>Weight ratio to 1 kg: {{ planet.weight }}</li>
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
    }
}
</script>

<style scoped>
.fav-container{
  background-color: silver;
  text-align: center;
  display: flex;
  flex-direction: column;
  border-radius: 10%;
  color: #2A73C1;
}
                        
ul {
  list-style-type: none;
   padding: 10%;
   margin: 20px;
}
</style>