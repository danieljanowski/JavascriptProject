<template>
    <div class="pic-container">
        <h1>Astronomy Photo Of The Day</h1>
        <div v-bind="picOfTheDay">
            <h2>{{ picOfTheDay.title }}</h2>
            <img class="astronomy-picture" :src="picOfTheDay.url" alt="Pic of the day">
            <p>{{ picOfTheDay.date }}</p>
            <p>{{ picOfTheDay.explanation}}</p>
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
}

</style>