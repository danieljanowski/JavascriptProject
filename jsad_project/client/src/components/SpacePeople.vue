<template>
    <div>
        <h1>Current Space Peeps!</h1>
        <div v-for="peep in peopleSpaceData.people">
            <p> {{peep.name}}: {{peep.craft}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "space-peeps",
    data() {
        return {
            peopleSpaceData: {}
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
        }
    }
}
</script>

<style scoped>

</style>