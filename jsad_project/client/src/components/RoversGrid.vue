<template>
    <div>
       <h1>Choose the rover</h1>
        <div class="roversgrid">
            <span class="single-rover"><img @click="handleOpportunitySelected" src="../assets/opportunity.jpg" width="250" alt="">Opportunity</span>
            <span class="single-rover"><img @click="handleCuriositySelected" src="../assets/curiosity.jpg" width="250" alt="">Curiosity</span>
            <span class="single-rover"><img @click="handleSpiritSelected" src="../assets/spirit.jpg" width="250" alt="">Spirit</span>
        </div>
        <div v-if="chosenRover">
            <form v-on:submit.prevent="handleChosenSol">
                <h2>Choose a sol</h2>
                <input v-model="chosenSol" placeholder="1000" type="number" min="1" :max="handleMaxNumber(chosenRover)"  required>
                <button type="submit">Load Photos</button>
                <button type="submit">Refresh Photos</button>
            </form>
            <br>
        </div>
        <div v-if="nasaData.photos">
            <span v-for="photo in randomPhotos"><img class="center_img" height="250" :src=photo.img_src></span>
        </div>
    </div>
</template>

<script>
export default {
name: 'rovers-grid',
data(){
  return{
    chosenRover: null,
    chosenSol: null,
    nasaData: [],
    curiosityMax: 2730,
    opportunityMax: 5111,
    spiritMax: 2208,
    numberPhotos: 0,
    randomPhotos: []
  }
},

methods: {
    handleOpportunitySelected () {
        this.chosenRover = "opportunity";
        this.nasaData = [];
        this.chosenSol = null
    },

    handleCuriositySelected () {
        this.chosenRover = "curiosity";
        this.nasaData = [];
        this.chosenSol = null
    },

    handleSpiritSelected () {
        this.chosenRover = "spirit";
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
        // .then(() => this.numberPhotos = this.nasaData.photos.length)
        .then(() => this.selectRandomPhotos())
    },

    handleMaxNumber(rover){
        if (rover === "curiosity"){
            return this.curiosityMax;
        } else if (rover === "opportunity"){
            return this.opportunityMax;
        } return this.spiritMax;
    } 
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
    margin-right: 40px;
}

button {
  background-color: #4CAF50; 
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
  color: #4CAF50;
}

</style>