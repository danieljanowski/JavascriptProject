<template>
    <div id="planet-info-container">
        <div v-if="selectedPlanet.name === 'Mercury'">
            <!-- Mercury Info -->
            <div class="planet-facts">
            <h1>Fun Facts about {{selectedPlanet.name}}!</h1>
            <p>It does not have any moons or rings.</p>
            <p>It the smallest planet (sorry Pluto).</p>
            <p>It is the closest planet to the Sun.</p>
            <p>It was first recorder in the 14th century BC </p>
            <p>It is the second densest planet.</p>
            <p>It is the second hottest planet.</p>
            <p>Only two spacecraft have ever visited Mercury.</p>
            </div>
            <div class="planet-bio">
            <h1>{{ selectedPlanet.name }}'s bio</h1> 
            <p>Mercury is the smallest planet in our solar system. It’s just a little bigger than Earth’s moon. It is the closest planet to the sun, but it’s actually not the hottest. Venus is hotter.
                Along with Venus, Earth, and Mars, Mercury is one of the rocky planets. It has a solid surface that is covered with craters. It has a thin atmosphere, and it doesn’t have any moons. Mercury likes to keep things simple.
            </p>
            </div>
        </div>

        <div v-if="selectedPlanet.name === 'Venus'">
            <!-- Venus Info -->
            <div class="planet-facts">
          <h1>Fun Facts about {{selectedPlanet.name}}!</h1>
            <p>It does not have any moons or rings.</p>
            <p>It is nearly as big as the Earth with a diameter of 12,104 km</p>
            <p>It is thought to be made up of a central iron core, rocky mantle and silicate crust.</p>
            <p>The surface temperature on Venus can reach 471 °C.</p>
            <p>It is the second brightest object in the night sky.</p>
            <p>It is the hottest planet in our solar system.</p>
            </div>
            <div class="planet-bio">
            <h1>{{ selectedPlanet.name }}'s Bio</h1>
            <p>Even though Venus isn't the closest planet to the sun, it is still the hottest. It has a thick atmosphere full of the greenhouse gas carbon dioxide and clouds made of sulfuric acid. The gas traps heat and keeps Venus toasty warm. In fact, it's so hot on Venus, metals like lead would be puddles of melted liquid. 
                Venus looks like a very active planet. It has mountains and volcanoes. Venus is similar in size to Earth. Earth is just a little bit bigger.
            </p>
            </div>
        </div>

        <div v-if="selectedPlanet.name === 'Earth'">
            <!-- Earth Info -->
            <div class="planet-facts">
            <h1>Fun Facts about {{selectedPlanet.name}}!</h1>
            <p>Its rotation is gradually slowing.</p>
            <p>The Earth was once believed to be the centre of the universe.</p>
            <p>It has a powerful magnetic field.</p>
            <p>There is only one natural satellite (moon) of the planet Earth.</p>
            <p>The Earth is the densest planet in the Solar System.</p>
            <p>Earth is the only planet not named after a god.</p>
            </div>
            <div class="planet-bio">
             <h1>{{ selectedPlanet.name }}'s Bio</h1>
            <p>Our home planet Earth is a rocky, terrestrial planet. It has a solid and active surface with mountains, valleys, canyons, plains and so much more. Earth is special because it is an ocean planet. Water covers 70% of Earth's surface.
                Our atmosphere is made mostly of nitrogen and has plenty of oxygen for us to breathe. The atmosphere also protects us from incoming meteoroids, most of which break up in our atmosphere before they can strike the surface as meteorites.
            </p>
            </div>
        </div>

        <div v-if="selectedPlanet.name === 'Luna'">
            <!-- Luna Info -->
            <div class="planet-facts">
            <h1>Fun Facts about {{selectedPlanet.name}}!</h1>
            <p>It is the fifth largest moon in the Solar System.</p>
            <p>The Moon orbits the Earth every 27.3 days.</p>
            <p>Mons Huygens is the tallest mountain on the Moon, it is 4700 metres tall, just over half the height of Mt Everest.</p>
            <p>The first person to set foot on the Moon was Neil Armstrong.</p>
            <p>Although research is continuing, most scientists agree that the Moon features small amounts of water.</p>
            <p>It is very hot during the day but very cold at night. The average surface temperature of the Moon is 107 degrees Celsius during the day and -153 degrees Celsius at night.</p>
            </div>
             <div class="planet-bio">
             <h1>{{ selectedPlanet.name }}'s Bio</h1>
            <p>Earth has just one moon – a rocky, cratered place, roughly a quarter the size of Earth and an average of 238,855 miles away. The Moon can be seen with the naked eye most nights as it traces its 27-day orbit around our planet.
                From Earth, it might look like the Moon is changing shape each night – from a tiny sliver to a half moon to a full moon and back again. What’s actually happening is that from our spot on Earth, we see different parts of the Moon lit up by the Sun as the Moon travels in its orbit.
            </p>
             </div>
        </div>


        <div v-if="selectedPlanet.name === 'Mars'">
            <!-- Mars Info -->
            <div class="planet-facts">
            <h1>Fun Facts about {{selectedPlanet.name}}!</h1>
            <p>It and Earth have approximately the same landmass.</p>
            <p>It is home to the tallest mountain in the solar system (21km high).</p>
            <p>Only 18 out of 40 missions to Mars have been successful. </p>
            <p>It has the largest dust storms in the solar system.</p>
            <p>Pieces of Mars have fallen to Earth.</p>
            <p>There are signs of liquid water on Mars.</p>
            </div>
            <div class="planet-bio">
             <h1>{{ selectedPlanet.name }}'s Bio</h1>
            <p>Mars is a cold desert world. It is half the size of Earth. Mars is sometimes called the Red Planet. It's red because of rusty iron in the ground.
                Like Earth, Mars has seasons, polar ice caps, volcanoes, canyons, and weather. It has a very thin atmosphere made of carbon dioxide, nitrogen, and argon.
                There are signs of ancient floods on Mars, but now water mostly exists in icy dirt and thin clouds. On some Martian hillsides, there is evidence of liquid salty water in the ground.
            </p>
            </div>
        </div>

         <div v-if="selectedPlanet.name === 'Jupiter'">
            <!-- Jupiter Info -->
            <div class="planet-facts">
            <h1>Fun Facts about {{selectedPlanet.name}}!</h1>
            <p>The ancient Babylonians were the first to record their sightings of Jupiter.</p>
            <p>It has unique cloud features.</p>
            <p>The Great Red Spot is a huge storm on Jupiter. It's been going for 350 years and could fit 3 earths.</p>
            <p>Its interior is made of rock, metal, and hydrogen compounds.</p>
            <p>Its moon "Ganymede" is the largest moon in the solar system.</p>
            <p>Eight spacecraft have visited Jupiter.</p>
            </div>
            <div class="planet-bio">
             <h1>{{ selectedPlanet.name }}'s Bio</h1>
            <p>Jupiter is the biggest planet in our solar system. It's similar to a star, but it never got big enough to start burning. It is covered in swirling cloud stripes.
                 It has big storms like the Great Red Spot, which has been going for hundreds of years. 
                 Jupiter is a gas giant and doesn't have a solid surface, but it may have a solid inner core about the size of Earth.
                Jupiter also has rings, but they're too faint to see very well.
            </p>
            </div>
        </div>

        <div v-if="selectedPlanet.name === 'Saturn'">
            <!-- saturn Info -->
            <div class="planet-facts">
            <h1>Fun Facts about {{selectedPlanet.name}}!</h1>
            <p>It can be seen with the naked eye.</p>
            <p>It was known to the ancients, including the Babylonians and Far Eastern observers.</p>
            <p>It has more moons than any other planet</p>
            <p>It has 150 moons and smaller moonlets.</p>
            <p>It is the flattest planet.</p>
            <p>Four spacecraft have visited Saturn.</p>
            </div>
            <div class="planet-bio">
             <h1>{{ selectedPlanet.name }}'s Bio</h1>
            <p>Saturn isn’t the only planet to have rings, but it definitely has the most beautiful ones.
                 The rings we see are made of groups of tiny ringlets that surround Saturn. They’re made of chunks of ice and rock.
                 Like Jupiter, Saturn is mostly a ball of hydrogen and helium.
                 When Galileo Galilei saw Saturn through a telescope in the 1600s, he wasn't sure what he was seeing.
                  At first he thought he was looking at three planets, or a planet with handles. Now we know those "handles" turned out to be the rings of Saturn.
            </p>
            </div>
        </div>

        <div v-if="selectedPlanet.name === 'Uranus'">
            <!-- Uranus Info -->
            <div class="planet-facts">
            <h1>Fun Facts about {{selectedPlanet.name}}!</h1>
            <p>It was officially discovered by Sir William Herschel in 1781.</p>
            <p>It is often referred to as an “ice giant” planet.</p>
            <p>It hits the coldest temperatures of any planet</p>
            <p>Its moons are named after characters created by William Shakespeare and Alexander Pope.</p>
            <p>Uranus is the largest shit hole in the solar system</p>
            <p>It has two sets of very thin dark coloured rings.</p>
            <p>Only one spacecraft has flown by Uranus.</p>
            </div>
            <div class="planet-bio">
             <h1>{{ selectedPlanet.name }}'s Bio</h1>
            <p>Uranus is made of water, methane, and ammonia fluids above a small rocky center. 
                Its atmosphere is made of hydrogen and helium like Jupiter and Saturn, but it also has methane. The methane makes Uranus blue.
                Uranus also has faint rings. The inner rings are narrow and dark. The outer rings are brightly colored and easier to see. Like Venus, Uranus rotates in the opposite direction as most other planets.
                And unlike any other planet, Uranus rotates on its side.
            </p>
            </div>
        </div>
             <div v-if="selectedPlanet.name === 'Neptune'">
            <!-- Neptune Info -->
            <div class="planet-facts">
            <h1>Fun Facts about {{selectedPlanet.name}}!</h1>    
            <p>It is the most distant planet from the Sun.</p>
            <p>It is the smallest gas giant.</p>
            <p>It has 6 faint rings.</p>
            <p>Its moons are named after characters created by William Shakespeare and Alexander Pope.</p>
            <p>It has a very active climate. Winds can reach speeds of 600 meters a second.</p>
            <p>Only one spacecraft has flown by Neptune.</p>
            </div>
             <div class="planet-bio">
             <h1>{{ selectedPlanet.name }}'s Bio</h1>
            <p>Neptune is dark, cold, and very windy. It's the last of the planets in our solar system. It's more than 30 times as far from the sun as Earth.
                 Neptune is very similar to Uranus. It's made of a thick fog of water, ammonia, and methane over an Earth-sized solid center. Its atmosphere is made of hydrogen,
                  helium, and methane. The methane gives Neptune the same blue color as Uranus.
                 Neptune has six rings, but they're very hard to see.
            </p>
             </div>
        </div>

         <div v-if="selectedPlanet.name === 'Pluto'">
            <!-- Pluto Info -->
            <div class="planet-facts">
            <h1>Fun Facts about {{selectedPlanet.name}}!</h1>   
            <p>It was discovered on February 18th, 1930 by the Lowell Observatory.</p>
            <p>It was reclassified from a planet to a dwarf planet in 2006.</p>
            <p>It is smaller than a number of moons.</p>
            <p>It has a eccentric and inclined orbit. This means it is sometimes closer to the sun than Neptune.</p>
            <p>It is named after the Roman god of the underworld.</p>
            <p>It has been visited by one spacecraft.</p>
            </div>
             <div class="planet-bio">
             <h1>{{ selectedPlanet.name }}'s Bio</h1>
            <p>Pluto is categorized as a dwarf planet. In 2006, Pluto was categorized with three other objects in the solar system that are about the same small size as Pluto:
                 Ceres, Makemake and Eris. These objects, along with Pluto,
                 are much smaller than the "other" planets.
            </p>
             </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "planet-info",
    props: {
        selectedPlanet: Object,
    }
}
</script>

<style scoped>
#planet-info-container{
    display: flex;
     flex-flow: flex-direction;
     align-content: flex-start;
     flex-wrap: wrap;
     height: 500px;
     margin-top: 1px;
     padding-top: 1px;
     padding-left: 70px;
     padding-right: 70px;
     }
.planet-facts{
    padding: 2%;
  background-color: #B1C4EF;
  margin: 2%;
  text-align: center;
    width: 33%;
  color: #130B5B;
  float: left;
  border-radius: 12px;
  height: auto;
}



.planet-bio{
    padding: 2%;
  background-color: #B1C4EF;
  position: relative;
  color: #130B5B;
  margin: 2%;
  text-align: center;
  width: 50%;
  order: 2;
  bottom: 0%;
    height: auto;
  float: right; 
  border-radius: 12px;
}

p {
     text-align: justify;
     margin-left: 40px;
     margin-right: 40px;
}



</style>