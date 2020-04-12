<template lang="html">
	<div id="planetsGrid">
		<planet v-for="planet in planets" :planet="planet" />
       <ul>
      <grid-item v-for="(planet, index) in planets" :planet="planet" :key="index"></grid-item>
    </ul>
	</div>
</template>

<script>
import Planet from './Planet.vue';
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
      'planet': Planet,
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