import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'

import { ref, onMounted } from 'vue'

BScroll.use(Slide)

export default function useSliderEffect(wrapperRef) {
  const slider = ref(null)
  const currentPageIndex = ref(0)
  onMounted(() => {
    slider.value = new BScroll(wrapperRef.value, {
      scrollX: true,
      scrollY: false,
      slide: true,
      momentum: false,
      bounce: false,
      probeType: 3,
      click: true
    })
    slider.value.on('slideWillChange', (page) => {
      currentPageIndex.value = page.pageX
    })
  })
  return { currentPageIndex }
}
