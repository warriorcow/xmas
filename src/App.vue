<template>
  <div id="app">
    <div class="wrapper">
      <Background />
      <main class="main">
        <Logo src="logo.svg" />
        <Tree @click.native="nextStep" :class="classObject" />
        <Test />
      </main>
    </div>
  </div>
</template>

<script>
import Logo from "./components/Logo";
import Test from "./components/Test";
// import Sound from "./components/Sound";
import Background from "./components/Background";
import Tree from "./components/Tree";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",

  components: {
    Logo,
    Test,
    Background,
    Tree
    // Sound,
  },

  computed: {
    ...mapGetters(["STEP_STATE"]),

    classObject() {
      let obj = {};
      obj["tree_" + this.STEP_STATE] = this.STEP_STATE;
      return obj;
    }
  },

  methods: {
    ...mapActions(["CHANGE_STATE"]),

    nextStep() {
      this.CHANGE_STATE("+");
    }
  }
};
</script>

<style lang="scss">
.wrapper {
  flex: 1;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
}

.main {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100vw;
  height: 100%;
  flex: 1;
  padding: 69px;
  overflow: auto;
  position: relative;

  @media screen and (max-width: 992px) {
    padding: 27px 20px 30px;
    position: static;
    height: auto;
  }
}
</style>
