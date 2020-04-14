import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import * as Vue2Leaflet from 'vue2-leaflet'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css';


Vue.use(VueScrollTo)
Vue.use(Vue2Leaflet)


Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
