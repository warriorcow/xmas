<template>
  <div id="app">
    <Background />
    <main class="main">
      <Logo src="logo.svg" />
      <Test />
    </main>
  </div>
</template>

<script>
import Logo from "./components/Logo";
import Test from "./components/Test";
import Background from "./components/Background";

export default {
  name: "App",

  components: {
    Logo,
    Test,
    Background
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  width: 100vw;
  flex: 1;
  min-height: 100vh;
  overflow: hidden;
}

.main {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 69px;
  @media screen and (max-width: 992px) {
    padding: 27px 20px 50px;
  }
}
</style>
