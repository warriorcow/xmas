<template>
  <div class="head">
    <a href="https://rosexpert.ru/" class="logo">
      <img :src="require(`../../public/image/${src}`)" alt="RosExpert" />
    </a>
    <Sound />
  </div>
</template>

<script>
import Sound from "./Sound";
export default {
  components: {
    Sound,
  },
  props: ["src"],
};
</script>

<style lang="scss">
.head {
  position: relative;
}
.logo {
  align-self: start;
  line-height: 0;

  img {
    width: 184px;
    height: 95px;

    @media screen and (max-width: 992px) {
      width: 145px;
      height: 75px;
      position: relative;
    }
  }
}
</style>
