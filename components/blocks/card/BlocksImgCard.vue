<template>
      <img v-if="width > 1200" :src="`/_nuxt/assets/images/${folder}/${index}desk.png`" alt="Вебинар">
      <img v-if="width <= 1200" :src="`/_nuxt/assets/images/${folder}/${index}mob.png`" alt="Вебинар">
</template>
<script>
 export default {
  props: {
    folder: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      width: window.innerWidth,
    }
  },
}
</script>
