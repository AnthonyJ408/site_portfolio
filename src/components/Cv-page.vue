<template>
  <div class="content">
    <h1>Curriculum Vitae</h1>
    <div>
      <img
        class="cv"
        src="../assets/dev_web_cv.jpg"
        alt="CV Anthony Jammes developer web "
      />
    </div>
    <div>
      <a
        href="https://drive.google.com/uc?export=dowload&id=1eRrwyWDpCBaSoQ1Z3ueLTBj4D1RhR-_1"
        target="_blank"
        download
        >Download
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
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
  box-sizing: border-box;
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
    margin: 5vh 0vh;
  }
  & .cv {
    border-radius: 20px;
    @media (max-width: #{$widthMin}px) {
      width: 60%;
    }
    transform-origin: top;
    animation: cvGrowth 1s ease-in-out backwards;
  }
  & a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: map.get($buttonColor, ".loader_welcome--3");
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    margin-top: 40px;
    font-size: 16px;
    letter-spacing: 4px;
    &:hover {
      background: map.get($buttonColor, ".loader_welcome--3");
      color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 15px map.get($buttonColor, ".loader_welcome--3");
    }

    & span {
      position: absolute;
      display: block;
    }

    & span:nth-child(1) {
      top: 0;
      left: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(
        90deg,
        transparent,
        map.get($buttonColor, ".loader_welcome--3")
      );
      animation: border-1 1s linear infinite;
    }

    & span:nth-child(2) {
      top: -100%;
      right: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(
        180deg,
        transparent,
        map.get($buttonColor, ".loader_welcome--3")
      );
      animation: border-2 1s linear infinite;
      animation-delay: 0.25s;
    }
    & span:nth-child(3) {
      bottom: 0;
      right: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(
        270deg,
        transparent,
        map.get($buttonColor, ".loader_welcome--3")
      );
      animation: border-3 1s linear infinite;
    }
    & span:nth-child(4) {
      bottom: -100%;
      left: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(
        360deg,
        transparent,
        map.get($buttonColor, ".loader_welcome--3")
      );
      animation: border-4 1s linear infinite;
      animation-delay: 0.25s;
    }
  }
}
</style>
