<template>
    <div>
        <p>The Mars Exploration Program's four principal goals were to determine if the potential for life exists on Mars <br>
            (in particular, whether recoverable water may be found on Mars), 
            to characterize the Mars climate <br> and its geology, and then to prepare for a potential human mission to Mars.
        </p>

        <div v-if="chosenRover === 'Curiosity'">
            <!-- Curiosity Info -->
            <p>Launch Site: Cape Canaveral LC-41</p>
            <p>Launch Date: 26th Nov 2011</p>
            <p>Landing Date: 6th Aug 2012</p>
            <p>Last contact: still operational</p>
            <p>Rover Weight: 899 kg</p>
            <p>Distance Covered: 21.61 km (13.43 mi)</p>
            
            <p>Fun fact: for sheer coolness, it's tough to beat ChemCam. This instrument will fire a laser at Martian rocks from up to 30 feet (9 meters) away and analyze the composition of the vaporized bits.
            ChemCam will thus enable Curiosity to study rocks that are out of reach of its flexible robotic arm.</p>
        </div>

        <div v-if="chosenRover === 'Spirit'">
            <!-- Spirit Info -->
            <p>Launch Site: Cape Canaveral SLC-17A</p>
            <p>Launch Date: 10th June 2003</p>
            <p>Landing Date: 4th January 2004</p>
            <p>Last Contact: 22nd March 2010</p>
            <p>Rover Weight: 185 kg</p>
            <p>Distance Covered: 7.73 km (4.8 mi)</p>
            
            <p>Fun fact: from late April to early June 2005, Opportunity was perilously lodged in a sand dune, with several wheels buried in the sand. Over a six-week period,
                 Earth-based physical simulations were performed to decide how best to extract the rover from its position without 
                risking its permanent immobilization. Successful maneuvering a few centimeters at a time eventually freed the rover, which resumed its travels.</p>
        </div>

        <div v-if="chosenRover === 'Opportunity'">
            <!-- Opportunity Info -->
            <p>Launch Site: Cape Canaveral LC-41</p>
            <p>Launch Date: 7th Jul 2003</p>
            <p>Landing Date: 25th Jan 2004</p>
            <p>Last Contact: 10th June 2018</p>
            <p>Rover Weight: 180 kg</p>
            <p>Distance Covered: 45.16 km (28.06 mi)</p>
            
            <p>Fun fact: Opportunity, NASA's longest-running Mars rover, outlived its twin rover, Spirit, <br> 
            which went silent in 2010 after getting stuck in a sand trap and running out of power.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "rover-info",
    props: {
        chosenRover: String,
    }
}
</script>

<style scoped>

</style>