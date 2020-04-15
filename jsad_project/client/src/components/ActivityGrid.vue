<template lang="html">
    <div class="activity-icons">
        <span><div class="activity-icon-single"><img id="rover-button" @click="handleSelectRovers" src="../assets/roverSelect.png" height="140px"></div></span>
        <span><div class="activity-icon-single"><img id="planets-button" @click="handleSelectPlanets" src="../assets/planetSelect.png" height="140px" ></div></span>
        <span><div class="activity-icon-single"><img id="iss-button" @click="handleSelectISS" src="../assets/issSelect.png" height="140px" ></div></span>
        <span><div class="activity-icon-single"><img id="spacePeeps-button" @click="handleSelectSpacePeeps" src="../assets/spacePeepsSelect.png" height="140px" ></div></span>
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
        },
        handleSelectISS(){
            this.selectedActivity = "iss-tracker";
            eventBus.$emit('selected-activity', this.selectedActivity);
        },
        handleSelectSpacePeeps(){
            this.selectedActivity = "space-peeps";
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
#iss-button{border-radius: 50%;
                background-color: orange;
                padding: 2%;}

#spacePeeps-button{border-radius: 50%;
                background-color: orange;
                padding: 2%;}

#planets-button:hover{border-radius: 50%;
                background-color: orange;
                padding: 2%;
                border: 6px;
                transition: 0.3s ease-in;
                border-color: black;
                border-style: solid;
                }
#rover-button:hover{border-radius: 50%;
                background-color: orange;
                padding: 2%;
                border: 6px;
                transition: 0.3s ease-in;
                border-color: black;
                border-style: solid;
                }
#spacePeeps-button:hover{border-radius: 50%;
                background-color: orange;
                padding: 2%;
                border: 6px;
                transition: 0.3s ease-in;
                border-color: black;
                border-style: solid;}


.activity-icons{
    display: flex;
    justify-content: space-evenly;
    align-content: center;
}


</style>