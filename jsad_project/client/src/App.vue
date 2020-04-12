<template>
  <div id="app">
    <h1>NASA</h1>
    <!-- <planets-grid /> -->
    <rovers-grid></rovers-grid>
    <!-- <span v-for="photo in nasaData.photos"><img class="center_img" height="250" :src=photo.img_src></span> -->
  </div>
</template>

<script>
import PlanetsGrid from './components/PlanetsGrid';
import RoversGrid from './components/RoversGrid';
export default {
  name: 'App',
  components: {
    'planets-grid': PlanetsGrid,
    'rovers-grid': RoversGrid,
  },
data(){
  return{
    nasaData: [],
  }
},
mounted(){
  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=hqxy8ha0DRZY5lspLbllJ2Az2ab61mahFiO847ae`)
  .then(apiData => apiData.json())
  .then(apiDataJson => this.nasaData = apiDataJson)
},

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
