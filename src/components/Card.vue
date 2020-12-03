<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
// import vueCustomScrollbar from "vue-custom-scrollbar";
// import "vue-custom-scrollbar/dist/vueScrollbar.css";
export default {
  components: {
    // vueCustomScrollbar
  },
  data() {
    return {
      settings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: false
      }
    };
  },
  methods: {
    scrollHanle(evt) {
      console.log(evt);
    }
  }
};
</script>

<style lang="scss">
.card {
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 30px 25px 30px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 30px;
  max-width: 576px;
  width: 100%;
  align-self: center;
  margin-top: 40px;
  font-size: 19px;
  line-height: 22.8px;
  overflow: hidden;
  // max-height: 85vh;
  position: relative;
  @media screen and (max-width: 992px) {
    font-size: 16px;
    line-height: 19px;
    // padding: 15px 19px;
    // max-height: 70vh;
    margin-top: 20px;
  }
}
</style>
