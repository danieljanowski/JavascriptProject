<template>
    <div id="planet-selector">
    <li v-on:click="handleClick">{{ planet.name }}
        <span><img :src="prepareImgAddress()" height="70px" /></span>
    </li>
    </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
    name: 'grid-item',
    props: ['planet'],
    methods: {
        handleClick(){
            eventBus.$emit('planet-selected', this.planet)
        },
        prepareImgAddress(){
            return `assets/${this.planet.icon}`
        },
    }

}
</script>

<style scoped>
#planet-selector{
    color: #EEEEEE;
    border-style: none;
    padding: 2%;
    width: 100%;
                        
}

</style>: