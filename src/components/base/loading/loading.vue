<template>
  <div class="loading">
    <div class="loading__content">
      <img class="loading__content__pic" src="./loading.gif" alt="Loading..." />
      <p class="loading__content__desc">{{ title }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Loading',
  setup() {
    const title = ref('正在加载...')
    function setTitle(title_) {
      title.value = title_
    }
    return { title, setTitle }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &__content {
    text-align: center;
    &__pic {
      width: 0.24rem;
      height: 0.24rem;
    }
    &__desc {
      line-height: 0.2rem;
      font-size: $font-size-small;
      color: $color-text-l;
    }
  }
}
</style>
