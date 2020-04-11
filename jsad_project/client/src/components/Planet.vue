<template lang="html">
  <div class="planet">
    <h2>{{ planet.name }}</h2>
    <p>{{ planet.diameter }}</p>
    <p>{{ planet.distance_from_sun }}</p>
  </div>
</template>

<script>
import PlanetService from '@/services/PlanetService';

export default {
  name: "planet",
  props: ['planet']
}
</script>