<template>
    <div class="pic-container">
        <h1 class="pic-intro">Astronomy Photo Of The Day</h1>
        <div v-bind="picOfTheDay">
            <h2>{{ picOfTheDay.date }}: {{ picOfTheDay.title }}</h2>
            <img class="astronomy-picture" :src="picOfTheDay.url" alt="Pic of the day">
            <p class="pic-explanation">{{ picOfTheDay.explanation}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "pic-of-the-day",
    data() {
        return {
            picOfTheDay: []
        }    
        },
    mounted(){
        this.fetchData()
    },
    methods: {
        fetchData() {
            fetch("https://api.nasa.gov/planetary/apod?api_key=hqxy8ha0DRZY5lspLbllJ2Az2ab61mahFiO847ae")
            .then(apiData => apiData.json())
            .then(apiDataJson => this.picOfTheDay = apiDataJson)
        },
    }
}
</script>

<style scoped>
.pic-container{
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    padding-top: 50px;
}
.pic-explanation{
  padding: 2%;
  margin:2%;
  background-color: silver;
  margin: 2%;
  text-align: center;
  width: 93%;
  color: #2A73C1;
  float:left;
  position: relative;
  border-radius: 12px;
}

h1 {
    font-style: oblique;
}

.pic-explanation {
     text-align: justify;
     margin-top: 80px;
}

</style>