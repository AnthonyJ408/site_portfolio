<template>
  <div class="content">
    <div class="carousel">
      <article
        class="carousel__item"
        v-for="project in projects"
        :key="project.id"
      >
        <img
          class="carousel__item-head"
          :src="getImgUrl(project.name)"
          :alt="'Project ' + project.name + ' web developer'"
        />

        <div class="carousel__item-body">
          <h2>{{ project.name }}</h2>
          <p>{{ project.definition }}</p>
          <a :href="project.url" target="_blank">
            <i class="fa fa-github"></i
          ></a>
        </div>
        <div class="carousel__item-anim"></div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsPage",
  data: () => ({
    index: 0,
    projects: [
      {
        id: 1,
        name: "Reservia",
        url: "https://github.com/AnthonyJ408/JAMMESAnthony_2_14062021",
        definition:
          "The project consisted of creating a prototype by integrating the client supplied mock-up in HTML and CSS.",
      },
      {
        id: 2,
        name: "Ohmyfood",
        url: "https://github.com/AnthonyJ408/JAMMESAnthony_3_25072021",
        definition:
          "The project consisted in developing a 100% mobile site that lists the menus of gourmet restaurants. I take care of the Front-end part by respecting the client supplied mock-up and making the CSS animations.",
      },
      {
        id: 3,
        name: "La Chouette Agence",
        url: "https://github.com/AnthonyJ408/JAMMESAnthony_4_30082021",
        definition:
          "The project consisted in optimizing the website of 'La chouette agence' a web design agency based in Lyon. Through SEO analysis, accessibility and performance.",
      },
      {
        id: 4,
        name: "Orinoak",
        url: "https://github.com/AnthonyJ408/JAMMESAnthony_5_27092021",
        definition:
          "This is my first JavaScript project, it was about creating a first MVP of an e-commerce site. There are three routes for the API: GET '/': which finds an array of all the elements. GET '/:id': which returns the corresponding element to the id. POST '/order': which retrieves the contact object and the table of products and returns them with the 'orderId'.",
      },
      {
        id: 5,
        name: "Piiquante",
        url: "https://github.com/AnthonyJ408/JAMMESAnthony_6_08112021",
        definition:
          "The project consisted of building a secure API for a gastronomic advice application. The product manager of Piiquante wishes that we can add/modify/delete sauces on the application and 'like' or 'dislike' a product posted by other users. Users must be authenticated to access the sauce gallery and all API routes must be secured.",
      },
      {
        id: 6,
        name: "Groupomania",
        url: "https://github.com/AnthonyJ408/JAMMESAnthony_7_18112021",
        definition:
          "The project involved building an internal social network for Groupomania employees. The purpose of this tool is to facilitate interactions between colleagues. The use of a Front-end Framework and an SQL database was requested. The site had to be secure, there had to be 'admin' accounts that could control the flow of messages and user accounts",
      },
      {
        id: 7,
        name: "Survivor",
        url: "https://github.com/siul008/Roguelike2D",
        definition:
          "It was a project to learn the basics of C# and Unity by trying to imitate the game 'Vampire survivors'. There is still work.",
      },
    ],
  }),
  mounted() {},
  methods: {
    getImgUrl(img) {
      var images = require.context("../assets/", false, /\.png$/);
      return images("./" + img + ".png");
    },
  },
};
</script>
<style lang="scss" scoped>
.carousel {
  position: relative;
  width: 90%;
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &__item {
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    padding: 0 12px;
    opacity: 0;
    will-change: transform, opacity;
    animation: carousel-animate-vertical $animation-timing linear infinite;

    &-head {
      box-shadow: 1px 1px 10px map.get($buttonColor, ".loader_welcome--1");
      border-radius: 50%;
      object-fit: cover;
      width: 180px;
      height: 180px;
      position: relative;
      margin-right: -90px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & a {
      text-decoration: none;
    }
    &-body {
      flex: 1;
      text-overflow: ellipsis;
      overflow: hidden;
      box-shadow: 2px 2px 5px black;
      min-height: 180px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 16px 20px 16px 100px;

      & h2 {
        color: map.get($buttonColor, ".loader_welcome--1");
        margin: 1vh;
      }
      & p {
        color: white;
      }
      & a {
        color: map.get($buttonColor, ".loader_welcome--1");
        margin: 1vh;
        @include font-size(1.5, 2);
        &:hover {
          transform: scale(1.5);
          color: white;
          transition: 500ms ease-in-out;
        }
      }
    }
  }
}
@for $i from 1 through ($carousel-items - 1) {
  .carousel__item:nth-child(#{$i}) {
    animation-delay: calc(#{$animation-delay-fraction} * #{$i - 2});
  }
}

.carousel__item:last-child {
  animation-delay: calc(-#{$animation-delay-fraction} * 2);
}
.content {
  padding: 1vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 73vh;
  width: 100%;
  border-radius: 3vh;
  box-shadow: 0px 0px 30px map.get($buttonColor, ".loader_welcome--1");
}
</style>
