<template>
    <div>
        <h1>Current Space Peeps!</h1>
        <div v-for="peep in peopleSpaceData.people">
            <p> <a :href="prepareGoogleAddress(peep.name)" target="_blank">{{peep.name}}: {{peep.craft}} <br>Click for more information</a></p>
        </div>
    </div>
</template>

<script>
export default {
    name: "space-peeps",
    data() {
        return {
            peopleSpaceData: {},
        }
    },
    mounted(){
        this.fetchData()
    },
    methods: {
        fetchData() {
            fetch("http://api.open-notify.org/astros.json")
            .then(apiData => apiData.json())
            .then(apiDataJson => this.peopleSpaceData = apiDataJson)
            },

        prepareGoogleAddress(peepName){
            return `http://www.google.com/search?q=${peepName}&btnI`
        }
    },
};
</script>

<style scoped>
    p {
        font-size: 1.5em;
    }

    a {
        text-decoration: none;
    color:white;
    }
</style>

