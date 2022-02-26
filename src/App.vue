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
  z-index: 2;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    3deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 1) 11%,
    rgba(141, 0, 255, 0.6923144257703081) 21%,
    rgba(51, 49, 157, 1) 23%,
    rgba(0, 0, 0, 1) 100%
  );
}
</style>

.btn { text-decoration: none; border: 1px solid rgb(146, 148, 248); position:
relative; overflow: hidden; font-size: 1.5rem; padding: 1rem 3rem; color:
#f4f4f4; } .btn:hover { box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
} .btn:before { content: ""; position: absolute; top: 0; left: -100%; width:
100%; height: 100%; background: linear-gradient( 120deg, transparent, rgba(146,
148, 248, 0.4), transparent ); transition: all 650ms; } .btn:hover:before {
left: 100%; }
