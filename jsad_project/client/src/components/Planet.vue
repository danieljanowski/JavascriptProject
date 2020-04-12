<template lang="html">
  <div class="planet">
 

  </div>
</template>

<script>
import PlanetService from '@/services/PlanetService';
import GridItem from './PlanetGridItem.vue'
import { eventBus } from '../main.js';

export default {
  name: "planet",
  props: ['planet']
}
</script>
