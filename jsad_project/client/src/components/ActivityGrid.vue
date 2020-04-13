<template lang="html">
    <div>
        <span><img @click="handleSelectRovers" src="../assets/opportunity.jpg">Rovers</span>
        <span><img @click="handleSelectPlanets" src="../assets/spirit.jpg">Planets</span>
    </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
    name: "activity-grid",
    data(){
        return{
            selectedActivity: null,
        };
    },
    methods: {
        handleSelectRovers(){
            this.selectedActivity = "planets";
            eventBus.$emit('selected-activity', this.selectedActivity);
        },
        
        handleSelectPlanets(){
            this.selectedActivity = "rovers";
            eventBus.$emit('selected-activity', this.selectedActivity);
        }
    },
}

</script>

<style scoped>

</style>