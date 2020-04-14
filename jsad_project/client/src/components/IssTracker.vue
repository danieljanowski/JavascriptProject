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
            .then(() => setTimeout(this.fetchData, 1000))
        },
    },

    // function moveISS () {
    // $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
    //     var lat = data['iss_position']['latitude'];
    //     var lon = data['iss_position']['longitude'];

    //     // See leaflet docs for setting up icons and map layers
    //     // The update to the map is done here:
    //     iss.setLatLng([lat, lon]);
    //     isscirc.setLatLng([lat, lon]);
    //     map.panTo([lat, lon], animate=true);
    // });
    // setTimeout(moveISS, 5000); 
// }

};


</script>

<style scoped>

</style>