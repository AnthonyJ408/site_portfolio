<template>
  <div class="content">
    <h1>Curriculum Vitae</h1>
    <img
      class="cv"
      src="../assets/dev_web_cv.jpg"
      alt="CV Anthony Jammes developer web "
    />

    <a
      href="https://drive.google.com/uc?export=dowload&id=1eRrwyWDpCBaSoQ1Z3ueLTBj4D1RhR-_1"
      target="_blank"
      download
      ><i class="fa fa-download"></i>
    </a>
  </div>
</template>
<script>
export default {
  name: "CvPage",

  methods: {},
};
</script>
<style lang="scss" scoped>
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
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 1vh;
  color: white;
  scrollbar-color: rgba(255, 255, 255, 0.1) rgba(255, 255, 255, 0.1);
  scrollbar-width: thin;
  overflow: auto;
  height: 73vh;
  border-radius: 3vh;
  box-shadow: 0px 0px 30px map.get($buttonColor, ".loader_welcome--3");
  & h1 {
    color: map.get($buttonColor, ".loader_welcome--3");
    @include font-size(2.5, 3);
    text-align: center;
    margin: 3vh 0vh;
  }
  & .cv {
    border-radius: 20px;
  }
  & a {
    text-decoration: none;
    @include font-size(1.5, 2.5);
    color: map.get($buttonColor, ".loader_welcome--3");
    margin: 3vh 0vh;
    padding: 20px 40px;
    border: solid 2px;
    border-radius: 20px;
    &:hover {
      transform: scale(1.2);
      transition: all 500ms ease-in-out;
      border: solid 1px;
      opacity: 0.8;
    }
  }
}
</style>
