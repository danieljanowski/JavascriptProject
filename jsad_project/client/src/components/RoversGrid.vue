<template>
    <div>
         <p>NASA's Mars Exploration Rover (MER) mission was a robotic space mission launched in 2003 involving two Mars rovers, Spirit and Opportunity, exploring the planet Mars. The two rovers were then joined by Curiosity in 2012. <br>
             The Mars Exploration Program's four principal goals were to determine if the potential for life exists on Mars
            (in particular, whether recoverable water may be found on Mars), 
            to characterize the Mars climate and its geology, and then to prepare for a potential human mission to Mars.
             The Mars Exploration Rovers were to travel across the Martian surface and perform periodic geologic analyses to determine if water ever existed
              on Mars as well as the types of minerals available, as well as to corroborate data taken by the Mars Reconnaissance Orbiter.
         </p>
       <h1>Choose the rover</h1>
        <div class="roversgrid">
            <span class="single-rover"><img class="rover-profile-image" @click="handleOpportunitySelected" src="../assets/opportunity.jpg" alt="">Opportunity</span>
            <span class="single-rover"><img class="rover-profile-image" @click="handleCuriositySelected" src="../assets/curiosity.jpg" width=250px alt="">Curiosity</span>
            <span class="single-rover"><img class="rover-profile-image" @click="handleSpiritSelected" src="../assets/spirit.jpg" width=250px alt="">Spirit</span>
       
        </div>
        <div v-if="chosenRover">
                <h1>{{ chosenRover }}</h1>
                <rover-info :chosenRover="chosenRover"></rover-info>
                <p>A sol is a solar day on Mars. <br> Your chosen rover "{{ chosenRover }}" has been on Mars for {{handleMaxNumber(chosenRover)}} sols, which is {{ parseFloat(Math.round(handleMaxNumber(chosenRover) * 1.03).toFixed(0)) }} Earth days.</p>
                 <h3>Choose a sol to display 20 random photos taken on that sol</h3>
            <form v-on:submit.prevent="handleChosenSol">
                <input v-model="chosenSol" placeholder="1000" type="number" min="0" :max="handleMaxNumber(chosenRover)"  required>            
                <button type="submit">Show Photos</button>
                <button type="submit" v-if="nasaData.photos">Shuffle Photos</button>
            </form>
            <br>
        </div>
        <div v-if="nasaData.photos">
            <span v-for="photo in randomPhotos"><img class="center_img" height="250" :src=photo.img_src></span>
        </div>
        <div>
            <form v-on:submit.prevent="selectRandomPhotos">
                <button type="submit" v-if="nasaData.photos">Show More Photos</button>
            </form>
        </div>
    </div>
</template>

<script>
import RoverInfo from "./RoverInfo.vue";
export default {
name: 'rovers-grid',
components: {
    "rover-info": RoverInfo,
},
data(){
  return{
    chosenRover: null,
    chosenSol: null,
    nasaData: [],
    curiosityMax: 2730,
    opportunityMax: 5111,
    spiritMax: 2208,
    randomPhotos: [],
  }
},

methods: {
    handleOpportunitySelected () {
        this.chosenRover = "Opportunity";
        this.nasaData = [];
        this.chosenSol = null
    },

    handleCuriositySelected () {
        this.chosenRover = "Curiosity";
        this.nasaData = [];
        this.chosenSol = null
    },

    handleSpiritSelected () {
        this.chosenRover = "Spirit";
        this.nasaData = [];
        this.chosenSol = null
    },

    selectRandomPhotos () {
        this.randomPhotos = [];
        for (var i = 0; i < 20; i++) {
        this.randomPhotos.push(this.nasaData.photos[Math.floor(Math.random()*this.nasaData.photos.length)]);
        }
    },

    handleChosenSol(){
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${this.chosenRover}/photos?sol=${this.chosenSol}&api_key=hqxy8ha0DRZY5lspLbllJ2Az2ab61mahFiO847ae`)
        .then(apiData => apiData.json())
        .then(apiDataJson => this.nasaData = apiDataJson)
        .then(() => this.selectRandomPhotos())
    },

    handleMaxNumber(rover){
        if (rover === "Curiosity"){
            return this.curiosityMax;
        } else if (rover === "Opportunity"){
            return this.opportunityMax;
        } return this.spiritMax;
    },
},
computed: {

}

}
</script>

<style scoped>
.roversgrid{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.single-rover{
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    margin-left: 20px;
}

h1 {
    font-style: oblique;
}

.rover-profile-image{
    border-radius: 50%;
    width: 300px;
    padding: 10px;
    margin: 20px;
}

.rover-profile-image:hover {
    border-radius: 50%;
    width: 310px;
    transition: 0.3s ease-in;
    border: 8px ;
    border-color: black;
    border-style: solid;
}

button {
  background-color: red; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; 
  transition-duration: 0.4s;
}

button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  background-color: white; 
  border: none;
  color: red;
}

</style>