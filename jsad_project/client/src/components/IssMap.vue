<template>

<div class ="iss-container">
  <div class="iss-map" style="height:700px; width: 80%; align: center;">
        <h3>Current Latitude: {{issPosition.latitude}} and Longitude: {{issPosition.longitude}}</h3>
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 80%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer
        :url="url"
      />

      <l-marker :lat-lng="withTooltip">
        <l-tooltip :options="{ permanent: true, interactive: true }">
            <!-- I AM THE ISS, WATCH ME MOVE -->
            <img width="50px" src="../assets/SpaceStationIcon.png"/>
        </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";

export default {
  name: "iss-map",
  props: {
        issPosition: Object,
   },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip
  },
  data() {
    return {
      zoom: 4,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      withPopup: latLng(parseFloat(`${this.issPosition.latitude}`), parseFloat(`${this.issPosition.longitude}`)),
      currentZoom: 4,
      currentCenter: latLng(parseFloat(`${this.issPosition.latitude}`), parseFloat(`${this.issPosition.longitude}`)),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    getLocation(){
      
    },
  },
  computed: {
    center: function() {
        return latLng(parseFloat(`${this.issPosition.latitude}`), parseFloat(`${this.issPosition.longitude}`))
    },

    withTooltip: function() {
        return latLng(parseFloat(`${this.issPosition.latitude}`), parseFloat(`${this.issPosition.longitude}`))
    },
    },
};
</script>

<style scoped>
  
.iss-container {
    display: flex;
    justify-content: center;
    border-radius: 12px;
    margin: 1%;
    padding: 0.5%;
  }

</style>