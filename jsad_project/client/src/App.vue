<template>
  <div id="app">
    <h1>NASA</h1>
    <activity-grid/>
    <planets-grid :planets='planets'/>
    <planet-detail v-if="selectedPlanet" :planet='selectedPlanet'/>
    <fav-planets :favPlanet='favPlanets'/>
    <rovers-grid/>
  </div>
</template>

<script>
import PlanetsGrid from './components/PlanetsGrid';
import PlanetDetail from './components/PlanetDetail';
import PlanetFavourites from './components/PlanetFavourites';
import { eventBus } from './main.js';
import RoversGrid from './components/RoversGrid';
import ActivityGrid from './components/ActivityGrid';
export default {
  name: 'app',
  components: {
    'planets-grid': PlanetsGrid,
    'planet-detail': PlanetDetail,
    'fav-planets': PlanetFavourites, 
    'rovers-grid': RoversGrid,
    'activity-grid': ActivityGrid
  },
data(){
  return{
    nasaData: [],
    planets: [],
    selectedPlanet: null,
    favPlanets: []    
  };
},
mounted(){
  eventBus.$on('planet-selected', (planet) => {
    this.selectedPlanet = planet
  })

  eventBus.$on('favourite-planets', (planet) => {
    this.favPlanets.push(planet)
  })
}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

li {
  list-style-type: none;
}
</style>
    
    
