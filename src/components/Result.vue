<template>
  <Card class="result">
    <div class="result__image">
      <img v-img :src="require(`../../public/image/${src}`)" :alt="title" />
    </div>
    <div class="result__inner">
      <div class="result__title">{{ title }}</div>
      <div class="result__desc">{{ desc }}</div>
    </div>
    <div class="result__footer">
      <button @click="REPASS_TEST" class="result__refresh">
        Пройти тест еще раз
      </button>
      <div class="result__social">
        <a
          class="vk"
          @click.prevent="
            popupCenter(`http://vk.com/share.php?url=${domen}/${name}.html`),
              '',
              1000,
              300
          "
        >
          <img src="../../public/image/vk.svg" alt="ВКонтакте" />
        </a>
        <a
          class="fb"
          @click.prevent="
            popupCenter(
              `https://www.facebook.com/sharer/sharer.php?u=${domen}/${name}.html`,
              '',
              500,
              300
            )
          "
        >
          <img src="../../public/image/fb.svg" alt="Facebook" />
        </a>
      </div>
    </div>
  </Card>
</template>

<script>
import Card from "./Card";
import { mapActions } from "vuex";
export default {
  components: {
    Card
  },

  props: ["src", "title", "desc", "name"],

  data() {
    return {
      domen: "https://ny-quiz.rosexpert.ru"
    };
  },

  methods: {
    ...mapActions(["REPASS_TEST"]),

    popupCenter(url, title, w, h) {
      const dualScreenLeft =
        window.screenLeft !== undefined ? window.screenLeft : window.screenX;
      const dualScreenTop =
        window.screenTop !== undefined ? window.screenTop : window.screenY;
      const width = window.innerWidth
        ? window.innerWidth
        : document.documentElement.clientWidth
        ? document.documentElement.clientWidth
        : screen.width;
      const height = window.innerHeight
        ? window.innerHeight
        : document.documentElement.clientHeight
        ? document.documentElement.clientHeight
        : screen.height;
      const systemZoom = width / window.screen.availWidth;
      const left = (width - w) / 2 / systemZoom + dualScreenLeft;
      const top = (height - h) / 2 / systemZoom + dualScreenTop;
      const newWindow = window.open(
        url,
        title,
        `
          scrollbars=yes,
          width=${w / systemZoom}, 
          height=${h / systemZoom}, 
          top=${top}, 
          left=${left}
          `
      );
      if (window.focus) newWindow.focus();
    }
  }
};
</script>

<style lang="scss">
.result {
  &__image {
    max-height: 373px;
    margin: -35px -45px 10px -45px;
    position: relative;
    @media screen and (max-width: 992px) {
      min-height: auto;
    }
    &::before {
      content: '';
      width: 30px;
      height: 30px;
      background: url('../../public/image/magnifier.svg');
      bottom: 20px;
      right: 20px;
      position: absolute;
      pointer-events: none;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  &__title {
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    margin-bottom: 15px;
  }
  &__desc {
    font-size: 17px;
    line-height: 23px;
  }
  &__footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    line-height: 19px;
    padding-top: 15px;
    margin-top: 25px;
    border-top: 1px solid #e2e2e2;
    a {
      border-radius: 10px;
      display: inline-flex;
      overflow: hidden;
      &:not(:last-of-type) {
        margin-right: 20px;
      }
    }
  }

  &__refresh {
    font-size: 17px;
    font-weight: 300;
    text-align: left;
    padding: 0;
  }

  &__social {
    display: flex;

    a {
      width: 37px;
      height: 37px;
      cursor: pointer;
      @media screen and (max-width: 992px) {
        width: 30px;
        height: 30px;
      }
      &.vk {
        width: 48px;
        @media screen and (max-width: 992px) {
          width: 38px;
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
