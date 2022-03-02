<template>
  <MeSvg /> <AnimatedSvg v-bind:color="renderKey" :key="renderKey" />

  <main>
    <Transition> <HomePage v-if="page == 'Home'" /></Transition>
    <Transition> <AboutPage v-if="page == 'About Me'" /></Transition>
    <Transition> <ProjectsPage v-if="page == 'My Projects'" /></Transition>
    <Transition> <CvPage v-if="page == 'CV'" /></Transition>
    <Transition> <ContactPage v-if="page == 'Contact'" /></Transition>
  </main>
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
html {
  @include font-size(0.5, 1.5);
  line-height: 1.2rem;
}
body {
  margin: 0%;
}
#app {
  overflow: hidden;
  z-index: 6;
  font-family: Helvetica, Arial, sans-serif;
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgb(15, 15, 15) 2%,
    rgba(99, 99, 99, 1) 53%,
    rgb(14, 13, 13) 98%
  );
}

.v-enter-active {
  animation: growth 600ms ease-in-out;
}

main {
  height: 70vh;
  animation: growth 600ms 2500ms ease-in-out;
  padding: 5vh 10vw 5vh 10vw;
}
</style>
