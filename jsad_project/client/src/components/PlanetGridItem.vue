<template>
  <li v-on:click="handleClick">{{ planet.name }}</li>
</template>

<script>
import { eventBus } from '../main.js';

export default {
    name: 'grid-item',
    props: ['planet'],
    methods: {
        handleClick(){
            eventBus.$emit('planet-selected', this.planet)
        }
    }

}
</script>

<style scoped>

</style>