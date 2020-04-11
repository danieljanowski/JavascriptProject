<template lang="html">
	<div id="planetsGrid">
		<planet v-for="planet in planets" :planet="planet" />
	</div>
</template>

<script>
import Planet from './Planet.vue';
import PlanetService from '../services/PlanetService.js';


export default {
  name: 'planets-grid',
  data() {
    return {
      planets: []
    }
  },
  components: {
      'planet': Planet
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