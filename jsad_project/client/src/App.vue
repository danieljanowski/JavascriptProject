<template>
  <div id="app">
    <h1>NASA</h1>
    <activity-grid/>
    <planets-grid v-if="selectedActivity === 'planets'" :planets='planets'/>
    <planet-detail v-if="selectedPlanet && selectedActivity === 'planets'" :planet='selectedPlanet'/>
    <planet-info :selectedPlanet='selectedPlanet'/>
    <fav-planets v-if="favPlanets.length > 0 && selectedActivity === 'planets'" :favPlanet='favPlanets'/>
    <rovers-grid v-if="selectedActivity === 'rovers'"/>
  </div>
</template>

<script>
import PlanetsGrid from './components/PlanetsGrid';
import PlanetDetail from './components/PlanetDetail';
import PlanetFavourites from './components/PlanetFavourites';
import RoversGrid from './components/RoversGrid';
import ActivityGrid from './components/ActivityGrid';
import PlanetInfo from './components/PlanetInfo';

import { eventBus } from './main.js';
export default {
  name: 'app',
  components: {
    'planets-grid': PlanetsGrid,
    'planet-detail': PlanetDetail,
    'fav-planets': PlanetFavourites, 
    'rovers-grid': RoversGrid,
    'activity-grid': ActivityGrid,
    'planet-info': PlanetInfo
  },
data(){
  return{
    nasaData: [],
    planets: [],
    selectedPlanet: null,
    favPlanets: [],
    selectedActivity: null 
     
  };
},
mounted(){
  eventBus.$on('planet-selected', (planet) => {
    this.selectedPlanet = planet
  })

  eventBus.$on('favourite-planets', (planet) => {
    this.favPlanets.push(planet)
  })

  eventBus.$on('selected-activity', (activity) => {
    this.selectedActivity = activity
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
  color: #eeeeee;
  margin-top: 60px;
  
}

li {
  list-style-type: none;
}
</style>
    
    
