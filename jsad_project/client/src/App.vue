<template>
  <div id="app">
    <planets-grid />
  </div>
</template>

<script>
import PlanetsGrid from './components/PlanetsGrid';
export default {
  name: 'App',
  components: {
    'planets-grid': PlanetsGrid,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
