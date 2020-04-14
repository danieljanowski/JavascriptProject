<template>
  <div class="detail-container" :planet="planet">

     <div id="weight-calculator">
      <h2>Calculate your weight on {{ planet.name }}!</h2>
                <img id="weight-icon" src="../assets/weightIcon.png" alt="" width="100px">
                <h3>{{parseFloat((calculateWeight).toFixed(2))}}</h3>
                <input v-model.number="weight" placeholder="Your weight in kilos" type="number"  required>                    
    </div>

     <div id="detail-info">
      <h1>{{planet.name}}</h1>
        <p>Diameter: {{ planet.diameter }}</p>
        <p>Distance from Sun: {{ planet.distance_from_sun }}</p>
        <p>Number of moons: {{ planet.number_of_moons }}</p>
        <p>Day length in Earth hours: {{ planet.day_length }}</p>
        
    <button v-on:click="handleFavouriteClick">Add To Favourites</button>
    </div>

  
    <div id="age-calculator">
       <h2>Calculate your age on {{ planet.name }}!</h2>
                <img id="age-icon" src="../assets/ageIcon.png" alt="" width="100px">
                <h3>{{parseFloat((calculateAge).toFixed(2))}}</h3>
                <input v-model.number="age" placeholder="Your age on Earth" type="number"  required>            
                
    </div>
  </div>
</template>


<script>
import PlanetService from '@/services/PlanetService';

import { eventBus } from '../main'

export default {
 name: 'planet-detail',
 data() {
   return {
    weight:  null,
    age: null
    }
 },
    props: ['planet'],
    methods: {
        handleFavouriteClick(){
          eventBus.$emit('favourite-planets', this.planet)
        }
    },
    computed: {
      calculateWeight: function (){
        return this.weight * this.planet.weight
      },

      calculateAge: function() {
        return this.age * this.planet.day_ratio
     },
   }
}
</script>

<style scoped>
    .detail-container{ background-color: #27292D;
                        color: #EEEEEE;
                        border-style: none;
                        border-radius: 12px;
                        padding: 5%;
                        text-align: center;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-evenly;
                        margin:2%;
                        }
    h2{color: #2A73C1;}
    h3{color: #2A73C1;
    font-size: 1.5em;}

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

#weight-icon{
  
  padding: 2%;
  align-self: center;
}
#age-icon{
  align-self: center;
  padding: 2%;
  
}

#weight-calculator{
  padding: 2%;
  background-color: silver;
  display: flex;
  flex-direction: column;
  border-radius: 10%;
  color: #2A73C1;
}
#age-calculator{
  padding: 2%;
  background-color: silver;
  display: flex;
  flex-direction: column;
  border-radius: 10%;
  color: #2A73C1;
}
#detail-info{
  padding: 2%;
  background-color: silver;
  display: flex;
  flex-direction: column;
  border-radius: 10%;
  color: #2A73C1;
}


</style>


