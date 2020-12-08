<template>
  
    <div id="app">
      <Background />
        <main class="main">
          <Tree @click.native="nextStep" :class="classObject" />
          <Logo src="logo.svg" />
          <Test />
        </main>
      
    </div>
  
</template>

<script>
import Tree from "./components/Tree";
import Logo from "./components/Logo";
import Test from "./components/Test";
import Background from "./components/Background";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",

  components: {
    Logo,
    Test,
    Background,
    Tree
  },

  computed: {
    ...mapGetters(["STEP_STATE", "ANSWERS_STATE"]),

    classObject() {
      let obj = {};
      obj["tree_" + this.STEP_STATE] = this.STEP_STATE;
      return obj;
    }
  },

  methods: {
    ...mapActions(["CHANGE_STATE", "CHANGE_ANSWERS"]),
    
    nextStep() {
      if (this.currentAnswer !== "" && this.STEP_STATE >= 2) {
        this.CHANGE_ANSWERS(this.currentAnswer);
        this.CHANGE_STATE();
        this.currentAnswer = "";
      } else if (this.STEP_STATE < 2) {
        this.CHANGE_STATE();
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
  }
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  width: 100vw;
  flex: 1;
  height: 100%;
  position: relative;
}

.main {
  flex: 1;
  width: 100%;
  // height: 100%;
  padding: 69px;
  overflow: auto;
  @media screen and (max-width: 992px) {
    padding: 27px 20px 50px;
    // display: flex;
    // flex-direction: column;
  }
}
</style>
