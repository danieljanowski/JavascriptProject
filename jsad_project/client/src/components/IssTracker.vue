<template lang="html">

    <div class="iss-intro">
        <h1>Follow the International Space Station's orbit around Earth</h1>
        <iss-map v-if="issData.iss_position" :issPosition='issData.iss_position' ></iss-map>
        <div id="iss-main-container">
            <img id="iss-image" src="http://spacecraftearth.com/wp-content/uploads/2017/06/ISS-Earth-Mediterranean-2.jpg" width="800px" alt="">
        <div class="iss-info-vocab">
        <h2>Words to Know</h2>
            <p>module: a self-contained unit of a spacecraft</p>
            <p>truss: a beam that serves as the space station's backbone to which some parts are connected</p>
            <p>airlock: an airtight room with two entrances that allows an astronaut to go on a spacewalk without letting the air out of the spacecraft</p>
            <p>microgravity: the condition of being weightless, or of the near absence of gravity</p>
        </div>
        
    <div class="iss-info">
        <h1>5 Things to know about the International Space Station</h1>
        <details>
        <summary>What is the International Space Station?</summary>
        
            <p>The International Space Station is a large spacecraft in orbit around Earth. It serves as a home where crews of 
            astronauts and cosmonauts live. The space station is also a unique science laboratory. 
            Several nations worked together to build and use the space station. 
            The space station is made of parts that were assembled in space by astronauts. 
            It orbits Earth at an average altitude of approximately 250 miles. It travels at 17,500 mph. 
            This means it orbits Earth every 90 minutes. NASA is using the space station to learn more about living 
            and working in space. These lessons will make it possible to send humans farther into space than ever before.</p>
            </details>
        <details>
        <summary>How old is the Space Station?</summary>
            <p>The first piece of the International Space Station was launched in November 1998. 
            More pieces were added over the next two years before the station was ready for people to live there. 
            The first crew arrived on November 2, 2000. People have lived on the space station ever since. 
            More pieces have been added over time. NASA and its partners from around the world completed construction 
            of the space station in 2011.</p>
         </details>
        <details>
         <summary>How big is the Space Station?</summary>
            <p>The space station has the volume of a five-bedroom house or two Boeing 747 jetliners. 
            It is able to support a crew of six people, plus visitors. On Earth, the space station would weigh almost a million pounds. 
            Measured from the edges of its solar arrays, the station covers the area of a football field including the end zones. 
            It includes laboratory modules from the United States, Russia, Japan and Europe.</p>
            </details>
        <details>
        <summary>What are the parts of the Space Station?</summary>
        
            <p>In addition to the laboratories where astronauts conduct science research, the space station has many other parts. 
            The first Russian modules included basic systems needed for the space station to function. 
            They also provided living areas for crew members. Modules called "nodes" connect parts of the station to each other.
            Stretching out to the sides of the space station are the solar arrays. These arrays collect energy from the sun to 
            eprovide electrical power. The arrays are connected to the station with a long truss. 
            On the truss are radiators that control the space station's temperature.
            Robotic arms are mounted outside the space station. The robot arms were used to help build the space station. 
            Those arms also can move astronauts around when they go on spacewalks outside. Other arms operate science experiments.
            Astronauts can go on spacewalks through airlocks that open to the outside. 
            Docking ports allow other spacecraft to connect to the space station. New crews and visitors arrive through the ports. 
            Astronauts fly to the space station on the Russian Soyuz. Robotic spacecraft use the docking ports to deliver supplies.</p>
       </details>
        <details>
        <summary>Why is the Space Station important?</summary>
        
            <p>The space station has made it possible for people to have an ongoing presence in space. 
            Human beings have been living in space every day since the first crew arrived. 
            The space station's laboratories allow crew members to do research that could not be done anywhere else. 
            This scientific research benefits people on Earth. Space research is even used in everyday life. 
            The results are products called "spinoffs." Scientists also study what happens to the body when people live in microgravity 
            for a long time.<br><br>
            NASA currently is working on a plan to explore other worlds. The space station is one of the first steps.</p>
        </details>
    </div>

    
    </div>
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
summary{
    font-size: 1.5em;
}

.iss-main-container{
        height: auto;
}

.iss-info-vocab{
    padding: 2%;
  background-color: silver;
  margin: 2%;
  text-align: center;
    width: 30%;
  color: #2A73C1;
  position: relative;
  float: left;
  border-radius: 12px;

}

.iss-info{
      padding: 2%;
      margin:2%;
  background-color: silver;
  margin: 2%;
  text-align: center;
    width: 93%;
  color: #2A73C1;
  float:left;
  position: relative;
  border-radius: 12px;
}

#iss-image{
    border-radius: 12px;
    position: relative;
    margin: 1%;
    float: right;
    width: 60%;
    height: 447px;
    
    top: 15px;
}

.iss-intro {
    margin-top: 100px;
    padding-top: 50px;
}


h1 {
    font-style: oblique;
}

p {
     text-align: justify;
     margin-left: 40px;
     margin-right: 40px;
}
</style>