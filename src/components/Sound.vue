<template>
  <div class="audio">
    <div class="audio__control">
      <div :class="{ active: mute }" class="audio__mute" @click="muted"></div>
      <div class="audio__volume">
        <input
          class="audio__range"
          type="range"
          v-model="volume"
          id="volume-control"
        />
      </div>
    </div>
    <audio
      :muted="!mute"
      :loop="STEP_STATE < 4"
      autoplay
      id="audio"
      :src="require(`../../public/sound/${sounds[STEP_STATE]}.mp3`)"
    ></audio>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      volume: "40",
      mute: false,
      sounds: [
        "start",
        "description",
        "description",
        "description",
        "qa1",
        "qa2",
        "qa3",
        "qa4",
        "qa5",
        "qa6",
        "qa7",
        "qa8",
        "qa9",
        "gift",
        "result",
      ],
    };
  },

  computed: {
    ...mapGetters(["STEP_STATE"]),

    setVolume() {
      return Number(this.volume) / 100;
    },
  },

  watch: {
    volume() {
      let audio = document.getElementById("audio");
      audio.volume = this.setVolume;
    },
  },

  methods: {
    muted() {
      this.mute = !this.mute;
      document.getElementById("audio").muted = this.mute;
    },
  },

  mounted() {
    var audio = document.getElementById("audio");
    audio.volume = this.setVolume;
  },
};
</script>

<style lang="scss">
.audio {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 1;
  $self: &;
  &__range {
    -webkit-appearance: none;
    vertical-align: middle;
    outline: none;
    border: none;
    padding: 0;
    background: none;
    &::-webkit-slider-runnable-track {
      background-color: #d7dbdd;
      height: 6px;
      border-radius: 3px;
      border: 1px solid transparent;
    }
    &::-moz-range-track {
      background-color: #d7dbdd;
      height: 6px;
      border-radius: 3px;
      border: none;
    }
    &::-ms-track {
      color: transparent;
      border: none;
      background: none;
      height: 6px;
    }
    &::-ms-fill-lower {
      background-color: #d7dbdd;
      border-radius: 3px;
    }
    &::-ms-fill-upper {
      background-color: #d7dbdd;
      border-radius: 3px;
    }
    &::-ms-tooltip {
      display: none; /* display and visibility only */
    }
    &::-moz-range-thumb {
      border-radius: 20px;
      height: 18px;
      width: 18px;
      border: none;
      background: none;
      background-color: #009cbd;
      cursor: grab;
    }
    &:active::-moz-range-thumb {
      outline: none;
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none !important;
      border-radius: 100%;
      background-color: #009cbd;
      cursor: grab;
      height: 18px;
      width: 18px;
      margin-top: -7px;
    }
    &:active::-webkit-slider-thumb {
      outline: none;
    }
    &::-ms-thumb {
      border-radius: 100%;
      background-color: #009cbd;
      cursor: grab;
      height: 18px;
      width: 18px;
      border: none;
    }
    &:active::-ms-thumb {
      border: none;
    }
  }
  &__control {
    position: absolute;
    top: 0;
    right: 0;
    &:hover #{$self}__volume {
      @media screen and (min-width: 992px) {
        transition: 1s;
        animation: collapseUp 0.1s forwards;
      }
    }
  }
  &__volume {
    transition: 0.1s;
    opacity: 0;
    position: absolute;
    height: 20px;
    width: 100px;
    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    right: 0;
    bottom: 0px;
    visibility: hidden;
    padding: 5px 10px;
    box-sizing: content-box;
    animation: collapseFade 0.1s forwards;
    &::before {
      position: absolute;
      top: -10px;
      right: 0;
      content: "";
      height: 10px;
      width: 56px;
    }
    input {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
    }
  }
  &__mute {
    z-index: 1;
    cursor: pointer;
    width: 56px;
    height: 56px;
    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    &::before {
      content: "";
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: url("../../public/image/mute.svg") no-repeat center;
    }

    &.active {
      &::before {
        background: url("../../public/image/mute-active.svg") no-repeat center;
      }
    }
  }

  @keyframes collapseUp {
    100% {
      opacity: 1;
      visibility: visible;
      transform: translateY(40px);
    }
  }
}
</style>
