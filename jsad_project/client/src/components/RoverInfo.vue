<template>
    <div id="main-info-container">
        <div v-if="chosenRover === 'Curiosity'">
            <!-- Curiosity Info -->
            <div class="key-facts">
                <h3>{{ chosenRover }}'s key facts</h3>
                <p>Launch Site: Cape Canaveral LC-41</p>
                <p>Launch Date: 26th Nov 2011</p>
                <p>Landing Date: 6th Aug 2012</p>
                <p>Last contact: still operational</p>
                <p>Rover Weight: 899 kg</p>
                <p>Distance Covered: 21.61 km (13.43 mi)</p>
            </div>
            <div class="mission-info">
                <h3>{{ chosenRover }}'s mission info</h3>
                <p>The car-size Curiosity rover is the centerpiece of NASA's $2.5 billion Mars Science Laboratory (MSL) mission; its main goal was to assess whether the Red Planet is, or ever was, capable of supporting microbial life.
                    For sheer coolness, it's tough to beat Curiosity's ChemCam. This instrument will fire a laser at Martian rocks from up to 30 feet (9 meters) away and analyze the composition of the vaporized bits.
                ChemCam will thus enable Curiosity to study rocks that are out of reach of its flexible robotic arm. <br>
                In addition, a US penny is on-board NASA's Curiosity rover that is scheduled to land on Mars in August.
                The 1909 penny commemorating the centennial of President Lincoln's birth will act as a calibration target to help scientists and the public to gauge the size of objects on Mars.
                </p>
                <details class="cameras">
                    <summary> Rover Cameras </summary>
            <img src="../assets/curiosity-cameras.jpg" alt="" width="500px">
            </details>
            </div>
             <div class="did-you-know-info">
                <h3>Did you know that...</h3>
             </div>
        </div>

        <div  v-if="chosenRover === 'Spirit'">
            <!-- Spirit Info -->
             <div class="key-facts">
                <h3>{{ chosenRover }}'s key facts</h3>
                <p>Launch Site: Cape Canaveral SLC-17A</p>
                <p>Launch Date: 10th June 2003</p>
                <p>Landing Date: 4th January 2004</p>
                <p>Last Contact: 22nd March 2010</p>
                <p>Rover Weight: 185 kg</p>
                <p>Distance Covered: 7.73 km (4.8 mi)</p>
             </div>
             <div class="mission-info">
                <h3>{{ chosenRover }}'s mission info</h3>
                <p>Spirit arrived at the Red Planet in January 2004.
                    Very soon after its landing, the rover found extensive evidence of carbonate and hematite, minerals that are associated with water environments. 
                    Spirit overcame numerous technical difficulties (including a faulty wheel) and delivered scientific data back to Earth for six years.
                    It stopped communicating with Earth on March 22, 2010, after it got stuck in a sand trap. 
                </p>
                <details class="cameras">
                    <summary> Rover Cameras </summary>
            <img src="../assets/roversCameras.jpeg" alt="" width="500px">
                </details>
                </div>
                
             <div class="did-you-know-info">
                <h3>Did you know that...</h3>
             </div>
        </div>

        <div  v-if="chosenRover === 'Opportunity'">
            <!-- Opportunity Info -->
             <div class="key-facts">
                <h3>{{ chosenRover }}'s key facts</h3>
                <p>Launch Site: Cape Canaveral LC-41</p>
                <p>Launch Date: 7th Jul 2003</p>
                <p>Landing Date: 25th Jan 2004</p>
                <p>Last Contact: 10th June 2018</p>
                <p>Rover Weight: 180 kg</p>
                <p>Distance Covered: 45.16 km (28.06 mi)</p>
            </div>
            <div class="mission-info">
                <h3>{{ chosenRover }}'s mission info</h3>
                <p>From late April to early June 2005, Opportunity was perilously lodged in a sand dune, with several wheels buried in the sand. Over a six-week period,
                    Earth-based physical simulations were performed to decide how best to extract the rover from its position without 
                    risking its permanent immobilization. Successful maneuvering a few centimeters at a time eventually freed the rover, which resumed its travels. <br>
                    The car-sized Mars rover ceased all communications with Earth in June 2018, when a planet-wide storm engulfed Mars. NASA revealed Opportunity’s last communique with Earth: as the Martian
                    storm descended on the rover and the skies were choked of all sunlight the solar-powered, Opportunity messaged NASA saying: "My battery is low and it’s getting dark.”
                </p>
                    <details class="cameras">
                        <summary> Rover Camer as </summary>
                    <img src="../assets/roversCameras.jpeg" alt="" width="500px">
            </details>
            </div>
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

 /* .info-container{ 
    order: 1;

} */
#main-info-container{
    display: flex;
     flex-flow: flex-direction;
     align-content: flex-start;
     flex-wrap: wrap;
     
     height: 500px;
}

.mission-info {
  padding: 2%;
  background-color: silver;
  position: relative;
  color: #2A73C1;
  margin: 2%;
  text-align: center;
  width: 60%;
  order: 2;
  float: right;
  bottom: 50%;
  height: 350px;
  border-radius: 12px;

}

.key-facts{
  padding: 2%;
  background-color: silver;
  margin: 2%;
  text-align: center;
    width: 25%;
  color: #2A73C1;
  float: left;
  border-radius: 12px;
}

.did-you-know-info{
    position: relative;
    top : 50%;
  padding: 2%;
  margin: 2%;
  color: #2A73C1;
  text-align: left;
  z-index: -1;
  position: relative;
}

.cameras {
    z-index: 10;
    position: relative;
}

</style>