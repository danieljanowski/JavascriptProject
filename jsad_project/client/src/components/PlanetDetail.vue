<template>
  <div class="detail-container" :planet="planet">
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
import PlanetService from '@/services/PlanetService';
import { eventBus } from '../main'
// ${this.planet.name} ${this.planet.diameter} ${this.planet.number_of_moons} ${this.planet.distance_from_sun}
export default {
 name: 'planet-detail',
    props: ['planet'],
    methods: {
        handleButton(){
          eventBus.$emit('favourite-planets', `name: ${this.planet.name}, diameter: ${this.planet.diameter}`)
        }
    }
}
</script>

<style scoped>
    .detail-container{ background-color: #27292D;
                        color: #EEEEEE;
                        border-style: none;
                        border-radius: 12px;
                        padding: 2%;
                        text-align: center;
                        }
    h2{color: #2A73C1;}

    button { background-color: #2A73C1;
            color: #EEEEEE;
            border-style: solid 4px;
            border-color:  #2A73C1;
            border-radius: 12px;
            font-size: 1em;
            font-family: 'Roboto Slab', serif;}
    button:hover {background-color: #27292D;
                color: #2A73C1;
                transition: 0.6s;
                }

</style>


