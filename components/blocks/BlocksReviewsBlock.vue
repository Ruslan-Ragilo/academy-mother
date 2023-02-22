<template>
  <div class="reviews-block">
    <h3 class="reviews-block__title">
      Мы уже помогли многим женщинам
    </h3>
    <elements-custom-select
      class="reviews-block__select"
      label="Отзывы Школа беременных"
      :items="optionsArray"
      @updateFilters="update"
    />
    <div>
      <swiper
        :slides-per-view="2"
        :space-between="40"
      >
<!--        <swiper-slide v-for="item in slidesArray">-->
<!--          asd-->
<!--        </swiper-slide>-->
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

const optionsArray = [
  {
    key: 'repro',
    label: 'Проект «Репро»'
  },
  {
    key: 'meno',
    label: 'Проект «Мено»'
  },
  {
    key: 'consumptionGuide',
    label: 'Гайд по питанию'
  },
  {
    key: 'webinars',
    label: 'Вебинары по подготовке'
  },
  {
    key: 'webinarsAnalise',
    label: 'Вебинар «Анализы и обследования во время беременности»'
  },
  {
    key: 'authorsProgram',
    label: 'Авторская программа восстановления после беременности'
  },
  {
    key: 'venera',
    label: 'Проект «Рождение Венеры»'
  }
]

  export default {
    components: {
      Swiper,
      SwiperSlide
    },

    setup () {

      function update (value) {
        console.log(value)
      }

      return {
        optionsArray,
        update
      }
    }
  }
</script>

<style lang="scss" scoped>
  .reviews-block {
    margin: 150px 0 0 0;
    width: 100%;

    &__title {
      color: #644C5C;
      font-size: 38px;
      margin: 0;
      text-align: left;
    }

    &__select {
      width: 410px;
      margin: 40px 0 0 0;
    }
  }
</style>