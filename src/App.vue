<template>
  <MeSvg /> <AnimatedSvg v-bind:color="renderKey" :key="renderKey" />
  <section>
    <div class="content"></div>
  </section>
  <NavAnimated />
</template>

<script>
import AnimatedSvg from "./components/Animated-svg";
import MeSvg from "./components/Me-svg.vue";
import NavAnimated from "./components/Nav-animated";

export default {
  name: "App",
  components: {
    NavAnimated,
    AnimatedSvg,
    MeSvg,
  },
  data: () => ({
    renderKey: "#5B21E3",
  }),
};
</script>

<style lang="scss">
body {
  margin: 0%;
}
#app {
  z-index: 6;
  font-family: Helvetica, Arial, sans-serif;
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 2%,
    rgba(99, 99, 99, 1) 53%,
    rgba(0, 0, 0, 1) 98%
  );
  overflow: hidden;
}

section {
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  padding: 5vh 15vw 0 15vw;

  & .content {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    animation: growth 2000ms ease-in-out forwards;
    box-shadow: 0px 0px 50px map.get($buttonColor, ".loader_welcome--2");
  }
}
</style>
