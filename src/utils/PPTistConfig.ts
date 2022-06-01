/* eslint-disable */

import { storeToRefs } from 'pinia'
import { useSlidesStore } from '@/store'
import { Slide } from '@/types/slides'


export const getSlides = (cb: any) => {
  const { slides, viewportRatio } = storeToRefs(useSlidesStore())
  cb(slides.value, viewportRatio.value)
}

export const setSlides = (slides: Slide[]) => {
  const slidesStore = useSlidesStore()
  slidesStore.setSlides(slides)
}

(window as any).PPTistConfig = {
  getSlides,
  setSlides
}
