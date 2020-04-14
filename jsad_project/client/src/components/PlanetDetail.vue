<template>
  <div class="detail-container" :planet="planet">
     <div>
      <h1>{{planet.name}}</h1>
        <p>Diameter: {{ planet.diameter }}</p>
        <p>Distance from Sun: {{ planet.distance_from_sun }}</p>
        <p>Number of moons: {{ planet.number_of_moons }}</p>
        <p>Day length in Earth hours: {{ planet.day_length }}</p>
        <p>Weight: {{ planet.weight }}</p>
    <button v-on:click="handleFavouriteClick">Add To Favourites</button>
    </div>
    
  </div>
</template>

<script>
import PlanetService from '@/services/PlanetService';
import { eventBus } from '../main'

export default {
 name: 'planet-detail',
    props: ['planet'],
    methods: {
        handleFavouriteClick(){
          eventBus.$emit('favourite-planets', this.planet)
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


