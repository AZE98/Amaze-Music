<template>
  <div class="header">
    <div class="header__title">
      <div class="header__logo music-icon icon-amaze"></div>
      <h1 class="header__text">Amaze Music</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
  height: 0.44rem;
  color: $color-theme;
  &__title {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 50%;
    line-height: 0.44rem;
  }
  &__logo {
    line-height: 0.44rem;
    font-size: 0.36rem;
  }
  &__text {
    padding-left: 0.03rem;
    font-size: $font-size-large;
  }
}
</style>
