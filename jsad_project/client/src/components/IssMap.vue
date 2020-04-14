<template>

  <div style="height: 500px; width: 80%">
    <div style="height: 200px overflow: auto;">
        {{issPosition.latitude}}, {{issPosition.longitude}}
      <p>First marker is placed at {{ withPopup.lat }}, {{ withPopup.lng }}</p>
      <p>Center is at {{ currentCenter }} and the zoom is: {{ currentZoom }}</p>
      <button @click="showLongText">
        Toggle long popup
      </button>
      <button @click="showMap = !showMap">
        Toggle map
      </button>
    </div>
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
        :attribution="attribution"
      />
      <l-marker :lat-lng="withPopup">
        <l-popup>
          <div @click="innerClick">
            I AM THE ISS POPUP
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-popup>
      </l-marker>
      <l-marker :lat-lng="withTooltip">
        <l-tooltip :options="{ permanent: true, interactive: true }">
          <div @click="innerClick">
            I AM THE ISS, WATCH ME MOVE
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-tooltip>
      </l-marker>
    </l-map>
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
    //   center: latLng(parseFloat(`${this.issPosition.latitude}`), parseFloat(`${this.issPosition.longitude}`)),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(parseFloat(`${this.issPosition.latitude}`), parseFloat(`${this.issPosition.longitude}`)),
    //   withTooltip: latLng(parseFloat(`${this.issPosition.latitude}`), parseFloat(`${this.issPosition.longitude}`)),
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
    showLongText() { 
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    }
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
