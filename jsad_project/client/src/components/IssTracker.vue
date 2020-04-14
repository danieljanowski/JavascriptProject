<template lang="html">
    <div>
        <h2>This is where the ISS lives</h2>
        <iss-map v-if="issData.iss_position" :issPosition='issData.iss_position' ></iss-map>
    </div>
</template>

<script>
    import IssMap from '@/components/IssMap.vue';

export default {
    name: "iss-tracker",
    components: {
        "iss-map": IssMap
    },
    data(){
        return{
            issData: [],
        }
    },
    mounted(){
        this.fetchData();
    },
    methods: {
        fetchData() {
            fetch('http://api.open-notify.org/iss-now.json')
            .then(apiData => apiData.json())
            .then(apiDataJson => this.issData = apiDataJson)
            .then(() => setTimeout(this.fetchData, 500))
        },
    },
};


</script>

<style scoped>

</style>