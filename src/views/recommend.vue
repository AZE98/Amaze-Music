<template>
  <div class="recommend">
    <div class="recommend__slider">
      <Slider v-if="sliders.length" :sliders="sliders" />
    </div>
  </div>
</template>

<script>
import { onBeforeMount, ref } from 'vue'
import { getRecommend } from '@/service/recommend'
import Slider from '@/components/base/slider/slider.vue'
export default {
  name: 'Recommend',
  components: { Slider },
  setup() {
    const sliders = ref([])
    const albums = ref([])
    const selectedAlbum = ref(null)
    onBeforeMount(async () => {
      const result = await getRecommend()
      sliders.value = result.sliders
      albums.value = result.albums
      selectedAlbum.value = null
    })
    return { sliders, albums, selectedAlbum }
  }
}
</script>

<style lang="scss" scoped>
.recommend {
  color: $color-text;
}
</style>
