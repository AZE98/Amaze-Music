<template>
  <div class="tab">
    <router-link class="tab__item" v-for="tab in tabs" :key="tab.path" :to="tab.path">
      <span class="tab__title">{{ tab.name }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  setup() {
    const tabs = [
      { name: '推荐', path: '/recommend' },
      { name: '歌手', path: '/singer' },
      { name: '排行', path: '/top-list' },
      { name: '搜索', path: '/search' }
    ]
    return { tabs }
  }
}
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  height: 0.44rem;
  line-height: 0.44rem;
  font-size: $font-size-medium;
  &__item {
    flex: 1;
    text-align: center;
    &.router-link-active .tab__title {
      color: $color-theme;
      border-bottom: 0.02rem solid $color-theme;
    }
  }
  &__title {
    padding-bottom: 0.05rem;
    color: $color-text-l;
  }
}
</style>
