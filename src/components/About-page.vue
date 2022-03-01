<template>
  <div class="content">
    <img
      class="myFace"
      src="../assets/anthony_jammes.jpg"
      alt="Anthony jammes, Web developper"
    />
    <p class="me">
      Hello, my name is Anthony, I live in Paris and my journey as a web
      developer officially started in 2021. I am a graduate of a Professional
      Title level V. I am interested in a lot of things and the areas that keep
      me awake are programming and internet. Today my project is to find a job
      as a web developer, to apply my skills.
    </p>

    <h1>About Me</h1>
    <div class="row">
      <p>HTML5</p>
      <div class="progress">
        <div class="progress_value--html"></div>
      </div>
      <p>CSS3</p>
      <div class="progress">
        <div class="progress_value--css"></div>
      </div>
      <p>JavaScript</p>
      <div class="progress">
        <div class="progress_value--js"></div>
      </div>
      <p>SQL/NoSQL</p>
      <div class="progress">
        <div class="progress_value--sql"></div>
      </div>
      <p>Vue.js</p>
      <div class="progress">
        <div class="progress_value--vue"></div>
      </div>
      <p>Node.js</p>
      <div class="progress">
        <div class="progress_value--node"></div>
      </div>
      <p>SASS</p>
      <div class="progress">
        <div class="progress_value--sass"></div>
      </div>
      <p>C#</p>
      <div class="progress">
        <div class="progress_value--c"></div>
      </div>
    </div>
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
  text-align: center;
  width: 100%;
}
.me {
  font-size: 1.2rem;
  margin: 0vh 5vh;
  width: 70%;
  text-align: center;
}
p {
  font-size: 1.5rem;
  width: 50%;
  text-align: center;
}
.myFace {
  opacity: 0.7;
  height: 20vw;
  border-radius: 20%;
  box-shadow: 2px 2px 5px black;
}
.row {
  flex-direction: row;
  align-content: space-between;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 30vh;
}
.content {
  flex-wrap: nowrap;
  flex-direction: column;
  color: white;
  z-index: 2;
  display: flex;
  align-content: space-around;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  border-radius: 25% 0% 25% 0%;
  box-shadow: 0px 0px 50px map.get($buttonColor, ".loader_welcome--0");
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
  width: 30vw;
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
}
</style>
