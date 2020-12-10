<template>
  <a href="https://rosexpert.ru/" class="logo">
    <img :src="require(`../../public/image/${src}`)" alt="RosExpert" />
  </a>
</template>

<script>
export default {
  props: ["src"]
};
</script>

<style lang="scss">
.logo {
  align-self: start;
  line-height: 0;

  img {
    width: 181px;
    height: 56px;

    @media screen and (max-width: 992px) {
      width: 145px;
      height: 45px;
      position: relative;
    }
  }
}
</style>
