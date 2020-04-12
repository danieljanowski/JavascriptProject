<template>
    <div>
       <h1>Choose the rover</h1>
        <div class="roversgrid">
            <span class="single-rover"><img @click="handleOpportunitySelected" src="../assets/opportunity.jpg" width="150" alt="">Opportunity</span>
            <span class="single-rover"><img @click="handleCuriositySelected" src="../assets/curiosity.jpg" width="150" alt="">Curiosity</span>
            <span class="single-rover"><img @click="handleSpiritSelected" src="../assets/spirit.jpg" width="150" alt="">Spirit</span>
        </div>
        <div v-if="chosenRover">
            <form v-on:submit.prevent="handleChosenSol">
                <h2>Choose a sol</h2>
                <input v-model="chosenSol" placeholder="1000" type="number" min="1" :max="handleMaxNumber(chosenRover)"  required>
                <button type="submit">Load Photos</button>
            </form>
            <br>
        </div>
        <div v-if="nasaData.photos">
            <span v-for="photo in nasaData.photos"><img class="center_img" height="250" :src=photo.img_src></span>
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
    spiritMax: 2208
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

    handleChosenSol(){
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${this.chosenRover}/photos?sol=${this.chosenSol}&api_key=hqxy8ha0DRZY5lspLbllJ2Az2ab61mahFiO847ae`)
        .then(apiData => apiData.json())
        .then(apiDataJson => this.nasaData = apiDataJson)
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
</style>