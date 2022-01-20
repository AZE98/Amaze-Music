<template>
  <div class="slider" ref="rootRef">
    <div class="slider__group">
      <div class="slider__page" v-for="item in sliders" :key="item.id">
        <a :href="item.link"><img :src="item.pic" :alt="item.id" /></a>
      </div>
    </div>
    <div class="slider__dots">
      <span
        class="slider__dot"
        v-for="(item, index) in sliders"
        :key="item.id"
        :class="{ active: currentPageIndex === index }"
      ></span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import useSliderEffect from './useSliderEffect.js'
export default {
  name: 'Slider',
  props: {
    sliders: {
      type: Array,
      default() {
        return []
      }
    },
    nums: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  setup() {
    const rootRef = ref(null)
    const { currentPageIndex } = useSliderEffect(rootRef)
    // console.log(slider.getCurrentPage())
    return { rootRef, currentPageIndex }
  }
}
</script>

<style lang="scss" scoped>
.slider {
  min-height: 0.01rem;
  touch-action: pan-y;
  position: relative;
  &__page {
    display: inline-block;
    a {
      display: block;
    }
  }
  &__dots {
    position: absolute;
    left: 50%;
    bottom: 0.1rem;
    transform: translateX(-50%);
  }
  &__dot {
    display: inline-block;
    margin: 0 0.04rem;
    width: 0.08rem;
    height: 0.08rem;
    border-radius: 50%;
    background: $color-theme-d;
    &.active {
      width: 0.2rem;
      border-radius: 0.05rem;
      background: $color-theme;
    }
  }
}
</style>
