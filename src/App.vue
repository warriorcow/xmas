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

  metaInfo() {
    return {
      title: "Epiloge - Build your network in your field of interest",
      meta: [
        {
          name: "description",
          content:
            "Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work."
        },
        {
          property: "og:title",
          content: "Epiloge - Build your network in your field of interest"
        },
        { property: "og:site_name", content: "Epiloge" },
        { property: "og:type", content: "website" },
        { name: "robots", content: "index,follow" }
      ]
    };
  }
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
  @media screen and (max-width: 992px) {
    // height: auto;
  }
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
