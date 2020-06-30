<template lang="html">
	<div id="planetsGrid">
		<h1>Pick a planet!</h1>
       <ul>
      <grid-item v-for="(planet, index) in planets" :planet="planet" :key="index" v-scroll-to="'.detail-container'"></grid-item>
    </ul>
	</div>
</template>

<script>
import PlanetService from '../services/PlanetService.js';
import GridItem from './PlanetGridItem.vue'

export default {
  name: 'planets-grid',
  data() {
    return {
      planets: []
    }
  },
  components: {
      'grid-item': GridItem
  },
  mounted() {
      this.fetchData();
  },
  methods: {
    fetchData(){
        // PlanetService.getPlanets()  // Replaced the database fetch with hardcoded values until database is set up on the server
        // .then(planets => this.planets = planets);
        this.planets = [
          {name: "Mercury", diameter: 4878, distance_from_sun: 57.9, number_of_moons: 0, day_length: 1408, weight: 0.38, icon: "mercury.png", day_ratio: 0.24},
          {name: "Venus", diameter: 12104, distance_from_sun: 108.2, number_of_moons: 0, day_length: 5832, weight: 0.91, icon: "venus.png", day_ratio: 0.62},
          {name: "Earth", diameter: 12756, distance_from_sun: 149.6, number_of_moons: 1, day_length: 24, weight: 1, icon: "earth.png", day_ratio: 1},
          {name: "Luna",  diameter: 3474, distance_from_sun: 150, number_of_moons: 0, day_length: 708, weight: 0.17, icon: "luna.png", day_ratio: 1},
          {name: "Mars", diameter: 6787, distance_from_sun: 227.9, number_of_moons: 2, day_length: 25, weight: 0.38, icon: "mars.png", day_ratio: 1.88 },
          {name: "Jupiter", diameter: 142796, distance_from_sun: 778.3, number_of_moons: 671, day_length: 10, weight: 2.34, icon: "jupiter.png", day_ratio: 12},
          {name: "Saturn", diameter: 120660, distance_from_sun: 1427.0, number_of_moons: 62, day_length: 11, weight: 1.06, icon: "saturn.png", day_ratio: 29.5},
          {name: "Uranus", diameter: 51118, distance_from_sun: 2871.0, number_of_moons: 27, day_length: 17, weight: 0.92, icon: "uranus.png", day_ratio: 84},
          {name: "Neptune", diameter: 48600, distance_from_sun: 4497.1, number_of_moons: 13, day_length: 16, weight: 1.19, icon: "neptune.png", day_ratio: 165},
          {name: "Pluto", diameter: 2274, distance_from_sun: 5913.0, number_of_moons: 4, day_length: 153, weight: 0.06, icon: "pluto.png", day_ratio: 248}
        ];
    }
  }
}
</script>


<style scoped>

#planetsGrid {
  margin-top: 100px;
}  

ul{
  display: flex;
}
</style>