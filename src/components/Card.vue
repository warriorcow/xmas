<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
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
  position: relative;
  @media screen and (max-width: 992px) {
    font-size: 16px;
    line-height: 19px;
    margin-top: 20px;
  }
}
</style>
