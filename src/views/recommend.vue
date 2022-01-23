<template>
  <div class="recommend" v-loading="loading">
    <Scroll class="recommend__content">
      <div>
        <div class="recommend__slider">
          <Slider v-if="sliders.length" :sliders="sliders" />
        </div>
        <div class="recommend__list">
          <h2 class="recommend__list__title" v-show="!loading">热门歌单推荐</h2>
          <ul>
            <li class="recommend__list__item" v-for="item in albums" :key="item.id">
              <div class="recommend__list__item__img">
                <img v-lazy="item.pic" :alt="item.id" />
              </div>
              <div class="recommend__list__item__text">
                <h3>{{ item.username }}</h3>
                <p>{{ item.title }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
import { computed, onBeforeMount, ref } from 'vue'
import { getRecommend } from '@/service/recommend'
import Slider from '@/components/base/slider/slider.vue'
import Scroll from '@/components/base/scroll/scroll.vue'
export default {
  name: 'Recommend',
  components: { Slider, Scroll },
  setup() {
    const sliders = ref([])
    const albums = ref([])
    const selectedAlbum = ref(null)
    const loading = computed(() => {
      return !sliders.value.length && !albums.value.length
    })
    const loadingText = '正在载入...'
    onBeforeMount(async () => {
      const result = await getRecommend()
      sliders.value = result.sliders
      albums.value = result.albums
      selectedAlbum.value = null
    })
    return { sliders, albums, selectedAlbum, loading, loadingText }
  }
}
</script>

<style lang="scss" scoped>
.recommend {
  position: fixed;
  color: $color-text;
  width: 100%;
  top: 0.88rem;
  bottom: 0;
  overflow-y: scroll;
  &__content {
    height: 100%;
    overflow: hidden;
  }
  &__list {
    padding: 0 0.2rem;
    &__title {
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: center;
      font-size: $font-size-medium;
      color: $color-theme;
    }
    &__item {
      padding-bottom: 0.2rem;
      display: flex;
      &__img {
        width: 0.6rem;
        height: 0.6rem;
        margin-right: 0.2rem;
      }
      &__text {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: $font-size-medium;
        overflow: hidden;
        h3 {
          color: $color-text;
        }
        p {
          color: $color-text-d;
        }
      }
    }
  }
}
</style>
