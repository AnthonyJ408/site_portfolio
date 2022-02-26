<template>
  <HelloWorld />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
body {
  margin: 0px;
}
#app {
  z-index: -2;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  background: #000046;
  background: -webkit-radial-gradient(circle, #1cb5e0, #000046);
  background: radial-gradient(circle, #1cb5e0, #000046);
}
</style>
