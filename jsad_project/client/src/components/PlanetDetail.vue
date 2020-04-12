<template>
  <div>
      <h1>{{planet.name}}</h1>
    <p>Diameter: {{ planet.diameter }}</p>
    <p>Distance from Sun: {{ planet.distance_from_sun }}</p>
    <p>Number of moons: {{ planet.number_of_moons }}</p>
    <p>Day length in Earth hours: {{ planet.day_length }}</p>
    <p>Weight: {{ planet.weight }}</p>
    <button v-on:click="handleButton">Add To Favourites</button>
  </div>
</template>

<script>
export default {
 name: 'planet-detail',
    props: ['planet'],
    methods: {
        handleButton(){
            eventBus.$emit('fav-planets', this.planet.name)
        }
    }
}
</script>

<style scoped>

</style>

