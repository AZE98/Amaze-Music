<template>
  <Scroll class="index-list">
    <ul>
      <li v-for="group in data" :key="group.title" class="group">
        <h2 class="group__title">{{ group.title }}</h2>
        <ul>
          <li class="group__item" v-for="item in group.list" :key="item.id">
            <img class="group__item__img" v-lazy="item.pic" :alt="item.name" />
            <span class="group__item__name">{{ item.name }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </Scroll>
</template>

<script>
import Scroll from '@/components/base/scroll/scroll.vue'
export default {
  name: 'IndexList',
  components: { Scroll },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
