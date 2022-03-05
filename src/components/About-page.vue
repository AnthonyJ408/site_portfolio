<template>
  <div class="content">
    <img
      class="myFace"
      src="../assets/anthony_jammes.jpg"
      alt="Anthony jammes, Web developper"
    />
    <p class="me">
      Hello, my name is Anthony. I live in Paris and my journey as a web
      developer officially started in 2021.
      <br />I am a graduate of a Professional Title level V. <br />
      I am interested in a lot of things and the domains that keep me awake are
      programming and internet. <br />Today my project is to find a job as a web
      developer, to apply my skills.
    </p>
    <h1>About Me</h1>
    <div class="cut"></div>

    <ul>
      <li>
        <p>HTML5</p>
        <div class="progress">
          <div class="progress_value--html"></div>
        </div>
      </li>
      <li>
        <p>CSS3</p>
        <div class="progress">
          <div class="progress_value--css"></div>
        </div>
      </li>
      <li>
        <p>JavaScript</p>
        <div class="progress">
          <div class="progress_value--js"></div>
        </div>
      </li>
      <li>
        <p>SQL/NoSQL</p>
        <div class="progress">
          <div class="progress_value--sql"></div>
        </div>
      </li>
      <li>
        <p>Vue.js</p>
        <div class="progress">
          <div class="progress_value--vue"></div>
        </div>
      </li>
      <li>
        <p>Node.js</p>
        <div class="progress">
          <div class="progress_value--node"></div>
        </div>
      </li>
      <li>
        <p>Sass</p>

        <div class="progress">
          <div class="progress_value--sass"></div>
        </div>
      </li>
      <li>
        <p>C#</p>
        <div class="progress">
          <div class="progress_value--c"></div>
        </div>
      </li>
      <li>
        <p>Express.js</p>
        <div class="progress">
          <div class="progress_value--express"></div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "AboutPage",
};
</script>
<style lang="scss" scoped>
h1 {
  color: map.get($buttonColor, ".loader_welcome--0");
  @include font-size(2.5, 3);
  text-align: center;
  grid-area: h1;
  margin: 5vh 0vh;
}
ul {
  grid-area: ul;
  & li {
    margin: 1vh;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
  }
}

.myFace {
  opacity: 0.7;
  height: 250px;
  @media (max-width: #{$widthMin}px) {
    height: 150px;
  }
  margin-top: 2vh;
  border-radius: 20%;
  box-shadow: 2px 2px 5px black;
}
.me {
  margin-top: 2vh;
  width: 100%;
  text-align: center;
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
  padding: 1vh;
  color: white;
  display: grid;
  grid:
    [row1-start] "img p" 2fr [row1-end]
    [row2-start] "h1 h1" 1fr [row2-end]
    [row3-start] "ul ul" 2fr [row3-end]
    / 1fr 2fr;
  align-items: center;
  justify-items: center;
  scrollbar-color: rgba(255, 255, 255, 0.1) rgba(255, 255, 255, 0.1);
  scrollbar-width: thin;
  overflow: auto;
  height: 73vh;
  border-radius: 3vh;
  box-shadow: 0px 0px 30px map.get($buttonColor, ".loader_welcome--0");
}
.progress {
  background: rgba(255, 255, 255, 0.1);
  justify-content: flex-start;
  border-radius: 100px;
  align-items: center;
  position: relative;
  padding: 0 5px;
  display: flex;
  height: 20px;
  width: 40vw;
}

.progress_value {
  &--html {
    box-shadow: 0 10px 40px -10px #fff;
    border-radius: 100px;
    background: map.get($buttonColor, ".loader_welcome--0");
    height: 10px;
    width: 0;
    animation: load 3s normal forwards;
    --widthEnd: 80%;
  }
  &--css {
    box-shadow: 0 10px 40px -10px #fff;
    border-radius: 100px;
    background: map.get($buttonColor, ".loader_welcome--0");
    height: 10px;
    width: 0;
    animation: load 3s normal forwards;
    --widthEnd: 80%;
  }
  &--js {
    box-shadow: 0 10px 40px -10px #fff;
    border-radius: 100px;
    background: map.get($buttonColor, ".loader_welcome--0");
    height: 10px;
    width: 0;
    animation: load 3s normal forwards;
    --widthEnd: 70%;
  }
  &--sql {
    box-shadow: 0 10px 40px -10px #fff;
    border-radius: 100px;
    background: map.get($buttonColor, ".loader_welcome--0");
    height: 10px;
    width: 0;
    animation: load 3s normal forwards;
    --widthEnd: 30%;
  }
  &--vue {
    box-shadow: 0 10px 40px -10px #fff;
    border-radius: 100px;
    background: map.get($buttonColor, ".loader_welcome--0");
    height: 10px;
    width: 0;
    animation: load 3s normal forwards;
    --widthEnd: 50%;
  }
  &--node {
    box-shadow: 0 10px 40px -10px #fff;
    border-radius: 100px;
    background: map.get($buttonColor, ".loader_welcome--0");
    height: 10px;
    width: 0;
    animation: load 3s normal forwards;
    --widthEnd: 50%;
  }
  &--sass {
    box-shadow: 0 10px 40px -10px #fff;
    border-radius: 100px;
    background: map.get($buttonColor, ".loader_welcome--0");
    height: 10px;
    width: 0;
    animation: load 3s normal forwards;
    --widthEnd: 60%;
  }
  &--c {
    box-shadow: 0 10px 40px -10px #fff;
    border-radius: 100px;
    background: map.get($buttonColor, ".loader_welcome--0");
    height: 10px;
    width: 0;
    animation: load 3s normal forwards;
    --widthEnd: 15%;
  }
  &--express {
    box-shadow: 0 10px 40px -10px #fff;
    border-radius: 100px;
    background: map.get($buttonColor, ".loader_welcome--0");
    height: 10px;
    width: 0;
    animation: load 3s normal forwards;
    --widthEnd: 30%;
  }
}
</style>
