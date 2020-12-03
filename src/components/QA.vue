<template>
  <ul class="qa">
    <li v-for="(item, index) in items" class="qa__item" :key="item.id">
      <input
        name="answer"
        class="qa__input"
        :id="`answer${index}`"
        @change="$emit('change', item.value)"
        type="radio"
        :value="index"
        :data-value="item.value"
        v-model="picked"
      />
      <label :for="`answer${index}`" class="qa__text">
        {{ item.text }}
      </label>
      <div class="qa__radio">
        <svg
          width="13"
          height="24"
          viewBox="0 0 13 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.60607 21.5672C8.61652 22.6717 7.72961 23.5756 6.62509 23.5861V23.5861C5.52057 23.5965 4.6167 22.7096 4.60625 21.6051L4.56838 17.6053C4.56316 17.053 5.00661 16.6011 5.55887 16.5959L7.55878 16.5769C8.11104 16.5717 8.56298 17.0151 8.5682 17.5674L8.60607 21.5672Z"
            fill="#BCCCD5"
            stroke="#BCCCD5"
          />
          <path
            class="bulb"
            d="M1.2113 11.8854C1.18985 9.61983 1.8162 6.94028 2.84884 4.83345C3.36466 3.78106 3.97023 2.8956 4.6247 2.27815C5.27928 1.66059 5.94991 1.34004 6.61166 1.33378C7.27341 1.32752 7.94998 1.63531 8.61614 2.24036C9.28218 2.84531 9.9044 3.71915 10.4401 4.76159C11.5124 6.84849 12.1894 9.51571 12.2108 11.7812C12.2321 14.0324 11.6041 15.3756 10.6731 16.1738C9.72517 16.9865 8.36804 17.3179 6.76311 17.3331C5.15819 17.3483 3.79503 17.0426 2.83186 16.248C1.88592 15.4676 1.23261 14.1365 1.2113 11.8854Z"
            stroke="#BCCCD5"
          />
        </svg>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      picked: ""
    };
  },

  props: ["items"]
};
</script>

<style lang="scss">
.qa {
  $self: &;
  padding: 30px 0 30px 0;
  margin: 0;
  list-style: none;

  &__item {
    display: flex;
    position: relative;

    &:not(:last-of-type) {
      margin-bottom: 25px;
    }
  }

  &__text {
    position: relative;
    padding-left: 35px;
    display: inline-block;
    cursor: pointer;
    z-index: 1;
  }

  &__input {
    display: none;

    &:checked ~ #{$self}__radio .bulb {
      fill: #e21a1a;
      stroke: #e21a1a;
    }
  }

  &__radio {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%) rotate(-90deg);
    width: 12px;
    height: 23px;
    z-index: 0;

    .bulb {
      transition: 0.5s;
      fill: #fff;
    }
  }
}
</style>
