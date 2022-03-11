<template>
  <div class="content">
    <img src="../assets/logo_aj.png" alt="Logo Jammes Anthony" />
    <p>Hello, i'm</p>
    <h1>Anthony Jammes.</h1>
    <p>I'm a web developer.</p>
    <p>Welcome on my website.</p>
  </div>
</template>
<script>
export default {
  name: "HomePage",
};
</script>
<style lang="scss" scoped>
img {
  margin: 2vh 0vh;
  height: 20vh;
}
h1 {
  @include font-size(1.8, 3);
  color: map.get($buttonColor, ".loader_welcome--2");
  margin: 5vh 0vh;
}

.content {
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 3px;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
  line-height: 1.4rem;
  scrollbar-color: rgba(255, 255, 255, 0.1) rgba(255, 255, 255, 0.1);
  overflow: auto;
  scrollbar-width: thin;
  flex-direction: column;
  color: white;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  border-radius: 3vh;
  box-shadow: 0px 0px 50px map.get($buttonColor, ".loader_welcome--2");
}
</style>
