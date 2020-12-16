<template>
  <div class="audio">
    <div class="audio__control">
      <div :class="{ active: mute }" class="audio__mute" @click="muted"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      audio: "",
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
  },

  mounted() {
    this.playAudio();
  },

  methods: {
    muted() {
      // this.mute = !this.mute;

      if (!this.mute) {
        this.mute = !this.mute;
        this.audio.pause();
      } else {
        this.mute = !this.mute;
        this.audio.play();
      }
    },

    playAudio() {
      this.audio = new Audio(
        require(`../../public/sound/${this.sounds[this.STEP_STATE]}.mp3`)
      );
      this.audio.loop = true;
      this.audio.play();

      if (this.mute) {
        this.audio.pause();
      }
    },
  },

  watch: {
    STEP_STATE() {
      if (this.STEP_STATE === 1) {
        this.audio.pause();
        this.playAudio();
      }
      if (!(this.STEP_STATE >= 0 && this.STEP_STATE < 4)) {
        this.audio.pause();
        this.playAudio();
        this.audio.loop = false;
      }
    },
  },
};
</script>

<style lang="scss">
.audio {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  $self: &;
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
