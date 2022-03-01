<template>
  <div class="content"><p>Projects-page</p></div>
</template>
<script>
export default {
  name: "ProjectsPage",
};
</script>
<style lang="scss" scoped>
p {
  color: white;
}
.content {
  flex-direction: column;
  color: white;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  border-radius: 25% 0% 25% 0%;
  box-shadow: 0px 0px 50px map.get($buttonColor, ".loader_welcome--1");
}
</style>
