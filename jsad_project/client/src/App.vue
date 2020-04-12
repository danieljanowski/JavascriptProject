<template>
  <div id="app">
    <h1>NASA</h1>
    <planets-grid :planets='planets'/>
    <planet-detail v-if="selectedPlanet" :planet='selectedPlanet'/>
    <fav-planets :favPlanet='favPlanets'/>
  </div>
</template>

<script>
import PlanetsGrid from './components/PlanetsGrid';
import PlanetDetail from './components/PlanetDetail';
import PlanetFavourites from './components/PlanetFavourites';
import { eventBus } from './main.js'

export default {
  name: 'App',
  components: {
    'planets-grid': PlanetsGrid,
    'planet-detail': PlanetDetail,
    'fav-planets': PlanetFavourites   
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
  // fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=hqxy8ha0DRZY5lspLbllJ2Az2ab61mahFiO847ae`)
  // .then(apiData => apiData.json())
  // .then(apiDataJson => this.nasaData = apiDataJson)

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
    
    
