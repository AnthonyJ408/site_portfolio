<template>
  <div class="content">
    <h1>Contact me</h1>
    <form method="post" novalidate="true">
      <div class="user-box">
        <input
          @input="verifyInput('subject')"
          id="subject"
          v-model="subject"
          type="text"
          name="subject"
          required=""
        />
        <i
          class="fa fa-times"
          v-if="checkSubject == false"
          style="color: red"
        ></i>
        <i
          class="fa fa-check"
          v-if="checkSubject == true"
          style="color: green"
        ></i>

        <label>Subject</label>
      </div>
      <div class="user-box">
        <textarea
          @input="verifyInput('message')"
          id="message"
          v-model="message"
          type="text"
          name="message"
          required=""
        />
        <i
          class="fa fa-times"
          v-if="checkMessage == false"
          style="color: red"
        ></i>
        <i
          class="fa fa-check"
          v-if="checkMessage == true"
          style="color: green"
        ></i>
        <label>Message</label>
      </div>
      <a
        type="submit"
        class="submit"
        :href="`mailto:anthonyjammespro@gmail.com?subject=${subject}&body=${message}`"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Mail
      </a>
    </form>
  </div>
</template>
<script defer>
export default {
  name: "ContactPage",
  data() {
    return {
      email: null,
      subject: null,
      message: null,
      checkSubject: null,
      checkMessage: null,
    };
  },
  methods: {
    verifyInput(id) {
      var input = document.getElementById(id);
      var regex = /^[^<>]{1,4000}$/.test(input.value);
      if (id == "subject") {
        if (regex == false) {
          this.checkSubject = false;
        } else {
          this.checkSubject = true;
        }
      }
      if (id == "message") {
        if (regex == false) {
          this.checkMessage = false;
        } else {
          this.checkMessage = true;
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
h1 {
  @include font-size(2.5, 3);
  color: map.get($buttonColor, ".loader_welcome--4");
  margin: 5vh 0vh;
}
p {
  color: white;
}
form {
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.1);
  width: 80%;
  height: 70%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  scrollbar-color: rgba(255, 255, 255, 0.1) rgba(255, 255, 255, 0.1);
  scrollbar-width: thin;
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
  & .user-box {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px grey inset !important;
      -webkit-text-fill-color: white !important;
    }
    & input,
    textarea {
      width: 80%;
      padding: 10px 0;
      font-size: 16px;
      color: #fff;
      margin-bottom: 30px;
      border: none;
      border-bottom: 1px solid white;
      outline: none;
      background: transparent;
    }
    & label {
      position: absolute;
      top: 10%;
      left: 10%;
      padding: 10px 0;
      font-size: 16px;
      color: #fff;
      pointer-events: none;
      transition: 0.5s;
    }
    & textarea {
      scrollbar-color: rgba(255, 255, 255, 0.1) rgba(255, 255, 255, 0.1);
      scrollbar-width: thin;
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
    }
    & input:focus ~ label,
    textarea:focus ~ label,
    & input:valid ~ label,
    textarea:valid ~ label {
      top: -20px;
      left: 10%;
      color: map.get($buttonColor, ".loader_welcome--4");
      font-size: 12px;
    }
  }

  & .submit {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: map.get($buttonColor, ".loader_welcome--4");
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    margin-top: 40px;
    letter-spacing: 4px;

    &:hover {
      background: map.get($buttonColor, ".loader_welcome--4");
      color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 15px map.get($buttonColor, ".loader_welcome--4");
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
        map.get($buttonColor, ".loader_welcome--4")
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
        map.get($buttonColor, ".loader_welcome--4")
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
        map.get($buttonColor, ".loader_welcome--4")
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
        map.get($buttonColor, ".loader_welcome--4")
      );
      animation: border-4 1s linear infinite;
      animation-delay: 0.25s;
    }
  }
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
  border-radius: 3vh;
  box-shadow: 0px 0px 50px map.get($buttonColor, ".loader_welcome--4");
}
</style>
