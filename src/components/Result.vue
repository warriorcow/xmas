<template>
  <Card class="result">
    <div class="result__image">
      <img :src="require(`../../public/image/${src}`)" :alt="title" />
    </div>
    <div class="result__inner">
      <div class="result__title">{{ title }}</div>
      <div class="result__desc">{{ desc }}</div>
    </div>
    <div class="result__footer">
      <span>Поделиться</span>
      <div class="result__social">
        <a
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

export default {
  components: {
    Card
  },
  props: ["src", "title", "desc", "name"],

  data() {
    return {
      domen: "http://ny-quiz.rosexpert.ru"
    };
  },

  methods: {
    popupCenter(url, title, w, h) {
      // Fixes dual-screen position                             Most browsers      Firefox
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
    margin: -20px -30px 10px -30px;
    @media screen and (max-width: 992px) {
      min-height: auto;
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
  &__social {
    display: flex;
  }
}
</style>
