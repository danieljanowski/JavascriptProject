<template lang="html">
    <div>
        <span><img id="rover-button" @click="handleSelectRovers" src="../assets/roverSelect.png" height="140px">Rovers</span>
        <span><img id="planets-button" @click="handleSelectPlanets" src="../assets/planetSelect.png" height="140px" >Planets</span>
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
            this.selectedActivity = "rovers";
            eventBus.$emit('selected-activity', this.selectedActivity);
        },
        
        handleSelectPlanets(){
            this.selectedActivity = "planets";
            eventBus.$emit('selected-activity', this.selectedActivity);
        }
    },
}

</script>

<style scoped>
#planets-button{border-radius: 50%;
                background-color: orange;
                padding: 2%;}
#rover-button{border-radius: 50%;
                background-color: orange;
                padding: 2%;}
</style>