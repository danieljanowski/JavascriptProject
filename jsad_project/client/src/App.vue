<template>
  <div id="app">
    <h1>NASA</h1>
    <planets-grid :planets='planets'/>
    <span v-for="photo in nasaData.photos"><img class="center_img" height="250" :src=photo.img_src></span>
  </div>
</template>

<script>
import PlanetsGrid from './components/PlanetsGrid';
import PlanetFavourites from './components/PlanetFavourites';
import PlanetDetail from './components/PlanetDetail';
import { eventBus } from './main.js'

export default {
  name: 'App',
  components: {
    'planets-grid': PlanetsGrid,
    'fav-planets': PlanetFavourites,
    // 'grid-item': PlanetGridItem,
    // 'planet': Planet,
    'planet-detail': PlanetDetail
  },
data(){
  return{
    nasaData: [],
    favPlanets: [],
    selectedPlanet: null
  }
},
mounted(){
  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=hqxy8ha0DRZY5lspLbllJ2Az2ab61mahFiO847ae`)
  .then(apiData => apiData.json())
  .then(apiDataJson => this.nasaData = apiDataJson)

  eventBus.$on('planet-selected', (planet) => {
    this.selectedPlanet = planet
  })

  eventBus.$on('fav-planets', (planet) => {
    this.favPlanet.push(planet)
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
</style>
