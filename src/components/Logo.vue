<template>
  <div class="logo">
    <img :src="require(`../../public/image/${src}`)" alt="RosExpert" />
  </div>
</template>

<script>
export default {
  props: ["src"]
};
</script>

<style lang="scss">
.logo {
  z-index: 4;
  img {
    width: 181px;
    height: 56px;
    @media screen and (max-width: 992px) {
      width: 145px;
      height: 45px;
    }
  }
}
</style>
