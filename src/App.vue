<template>
  <MeSvg /> <AnimatedSvg v-bind:color="renderKey" :key="renderKey" />

  <section>
    <Transition> <HomePage v-if="page == 'Home'" /></Transition>
    <Transition> <AboutPage v-if="page == 'About Me'" /></Transition>
    <Transition> <ProjectsPage v-if="page == 'My Projects'" /></Transition>
    <Transition> <CvPage v-if="page == 'CV'" /></Transition>
    <Transition> <ContactPage v-if="page == 'Contact'" /></Transition>
  </section>
  <NavAnimated />
</template>

<script>
import AnimatedSvg from "./components/Animated-svg";
import MeSvg from "./components/Me-svg.vue";
import NavAnimated from "./components/Nav-animated";
import HomePage from "./components/Home-page";
import AboutPage from "./components/About-page";
import ProjectsPage from "./components/Projects-page";
import CvPage from "./components/Cv-page";
import ContactPage from "./components/Contact-page";

export default {
  name: "App",
  components: {
    NavAnimated,
    AnimatedSvg,
    MeSvg,
    HomePage,
    AboutPage,
    ProjectsPage,
    CvPage,
    ContactPage,
  },
  data: () => ({
    renderKey: "#51AB2C",
    page: "",
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
    rgb(15, 15, 15) 2%,
    rgba(99, 99, 99, 1) 53%,
    rgb(14, 13, 13) 98%
  );
  overflow: hidden;
}

.v-enter-active {
  animation: growth 600ms ease-in-out;
}

section {
  animation: growth 600ms 2500ms ease-in-out;
  padding: 5vh 15vw 0 15vw;
}
</style>
