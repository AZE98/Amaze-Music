<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script>
import useScrollEffect from './useScrollEffect.js'
import { ref } from 'vue'
export default {
  name: 'Scroll',
  props: {
    click: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const rootRef = ref(null)
    useScrollEffect(rootRef, props)
    return {
      rootRef
    }
  }
}
</script>
