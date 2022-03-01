<template>
  <div class="content">
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
h1 {
  color: map.get($buttonColor, ".loader_welcome--2");
  margin: 2vh 0vh;
}

.content {
  flex-direction: column;
  color: white;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 25% 0% 25% 0%;
  box-shadow: 0px 0px 50px map.get($buttonColor, ".loader_welcome--2");
}
</style>
