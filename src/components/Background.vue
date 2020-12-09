<template>
  <div class="background">
    <div class="garland garland_1"></div>
    <div class="garland garland_2"></div>
    <div class="garland garland_3"></div>
    <div class="garland garland_4"></div>
    <div class="garland garland_5"></div>
    <div class="snowflake snowflake_1"></div>
    <div class="snowflake snowflake_2"></div>
    <div class="snowflake snowflake_3"></div>
    <div class="snowflake snowflake_4"></div>
    <div class="snowflake snowflake_5"></div>
    <div class="snowflake snowflake_6"></div>
    <div class="snowflake snowflake_7"></div>
    <div class="snowflake snowflake_8"></div>
    <div class="snowflake snowflake_9"></div>
    <div class="snowflake snowflake_10"></div>
    <div class="snowflake snowflake_11"></div>
    <div class="snowflake snowflake_12"></div>
    <div class="snowflake snowflake_13"></div>
    <div class="snowflake snowflake_14"></div>
    <div class="snowflake snowflake_15"></div>
    <div class="snowflake snowflake_16"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.background {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 69px;
  left: 0;
  z-index: -1;
}
.garland {
  $self: &;
  position: absolute;
  top: 0;
  width: 28px;
  height: 65px;
  &#{$self}_1 {
    background: url("../../public/image/garland_1.svg") no-repeat center / cover;
    width: 28px;
    height: 66px;
    left: 318px;
  }
  &#{$self}_2 {
    background: url("../../public/image/garland_2.svg") no-repeat center / cover;
    width: 48px;
    height: 178px;
    left: 50px;
    left: 371px;
  }
  &#{$self}_3 {
    background: url("../../public/image/garland_3.svg") no-repeat center / cover;
    width: 48px;
    height: 111px;
    left: 466px;
  }
  &#{$self}_4 {
    background: url("../../public/image/garland_4.svg") no-repeat center / cover;
    width: 48px;
    height: 111px;
    right: 306px;
  }
  &#{$self}_5 {
    background: url("../../public/image/garland_5.svg") no-repeat center / cover;
    width: 48px;
    height: 177px;
    right: 201px;
  }
}

.snowflake {
  $self: &;
  background: url("../../public/image/snowflake.svg") no-repeat center / cover;
  width: 24px;
  height: 24px;
  position: fixed;
  top: -10%;
  animation-name: snowflakes-fall, snowflakes-shake;
  animation-duration: 10s, 3s;
  animation-timing-function: linear, ease-in-out;
  animation-iteration-count: infinite, infinite;
  animation-play-state: running, running;
  &#{$self}_1 {
    width: 24px;
    height: 24px;
    left: 72px;
    animation-delay: 1.2s, 1.2s;
  }
  &#{$self}_2 {
    width: 38px;
    height: 38px;
    left: 122px;
    animation-delay: 5.5s, 5.5s;
  }
  &#{$self}_3 {
    width: 39px;
    height: 39px;
    left: 171px;
    animation-delay: 2.5s, 2.5s;
  }
  &#{$self}_4 {
    width: 24px;
    height: 24px;
    left: 294px;
    animation-delay: 3.5s, 5.5s;
  }
  &#{$self}_5 {
    width: 38px;
    height: 38px;
    left: 322px;
    animation-delay: 1.6s, 1.6s;
  }
  &#{$self}_6 {
    width: 24px;
    height: 24px;
    left: 419px;
    animation-delay: 7.2s, 7.2s;
  }
  &#{$self}_7 {
    width: 36px;
    height: 36px;
    left: 478px;
    animation-delay: 3.1s, 3.1s;
  }
  &#{$self}_8 {
    width: 39px;
    height: 39px;
    right: 514px;
    animation-delay: 8.5s, 8.5s;
  }
  &#{$self}_9 {
    width: 23[x];
    height: 23px;
    right: 436px;
    animation-delay: 0.5s, 0.5s;
  }
  &#{$self}_10 {
    width: 28px;
    height: 28px;
    right: 379px;
    animation-delay: 3.1s, 3.1s;
  }
  &#{$self}_11 {
    width: 33px;
    height: 33px;
    right: 360px;
    animation-delay: 3.9s, 3.9s;
  }
  &#{$self}_12 {
    width: 23px;
    height: 23px;
    right: 306px;
    animation-delay: 1.45s, 1.45s;
  }
  &#{$self}_13 {
    width: 23px;
    height: 23px;
    right: 214px;
    animation-delay: 2s, 2s;
  }
  &#{$self}_14 {
    width: 23px;
    height: 23px;
    right: 134px;
    animation-delay: 0.4s, 0.4s;
  }
  &#{$self}_15 {
    width: 23px;
    height: 23px;
    right: 99px;
    animation-delay: 4.9s, 4.9s;
  }
  &#{$self}_16 {
    width: 33px;
    height: 33px;
    right: 69px;
    animation-delay: 2s, 2s;
  }
}

@keyframes snowflakes-fall {
  0% {
    top: -10%;
  }
  100% {
    top: 100%;
  }
}

@keyframes snowflakes-shake {
  0% {
    transform: translateX(0px) rotate(0deg);
  }
  50% {
    transform: translateX(80px) rotate(180deg);
  }
  100% {
    transform: translateX(0px) rotate(360deg);
  }
}
</style>
