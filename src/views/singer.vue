<template>
  <div class="singer" v-loading="!singers.length">
    <IndexList :data="singers"></IndexList>
  </div>
</template>

<script>
import { getSingerList } from '@/service/singer'
import IndexList from '@/components/base/index-list/index-list.vue'
import { onBeforeMount, ref } from 'vue'
export default {
  name: 'Singer',
  components: { IndexList },
  setup() {
    const singers = ref([])
    const selectedSinger = ref(null)
    onBeforeMount(async () => {
      const result = await getSingerList()
      singers.value = result.singers
      console.log(singers.value)
      selectedSinger.value = null
    })
    return { singers, selectedSinger }
  }
}
</script>

<style lang="scss" scoped>
.singer {
  position: fixed;
  width: 100%;
  top: 0.88rem;
  bottom: 0;
}
</style>
