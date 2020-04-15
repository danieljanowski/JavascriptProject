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
        PlanetService.getPlanets()
        .then(planets => this.planets = planets);
    }
  }
}
</script>


<style scoped>

#planetsGrid {
  margin-top: 100px;
}  

h1 {
  font-style: oblique;
}

ul{
  display: flex;
}
</style>