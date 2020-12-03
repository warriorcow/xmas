<template>
  <Card class="result">
    <div class="result__image">
      <img :src="require(`../assets/${src}`)" alt="" />
    </div>
    <div class="result__inner">
      <div class="result__title">{{ title }}</div>
      <div class="result__desc">{{ desc }}</div>
    </div>
    <div class="result__footer">
      <span>Поделиться</span>
      <div class="result__social">
        <a target="_blank" href="http://vk.com/share.php?url=./test.html">
          <img src="../assets/vk.svg" alt="ВКонтакте" />
        </a>
        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://warriorcow.github.io/xmas/index.html">
          <img src="../assets/fb.svg" alt="Facebook" />
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
  props: ["src", "title", "desc"],

  metaInfo() {
    return { 
      title: this.title,
      meta: [
          { vmid: 'description', name: 'description', content: this.desc},
          { vmid: 'og:title', property: 'og:title', content: this.title},
          { vmid: 'og:description', property: 'og:description', content: this.desc },
          { property: 'og:site_name', content: 'Xmas'},
          { property: 'og:type', content: 'website'},    
          { name: 'robots', content: 'index,follow'} 
      ]
    }
  }
};
</script>

<style lang="scss">
.result {
  &__image {
    min-height: 373px;
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
    font-size: 19px;
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
