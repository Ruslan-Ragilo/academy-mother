<template>
  <div class="reviews-block">
    <h3 class="reviews-block__title">
      Мы уже помогли многим женщинам
    </h3>
    <elements-custom-select
      class="reviews-block__select"
      :label="currSelected"
      :items="optionsArray"
      @updateFilters="update"
    />
    <div class="swiper">
      <swiper
        :breakpoints="{
      1281: {
        slidesPerView: 2,       
        spaceBetween: 40
      },
      500: {
        slidesPerView: 1,       
        spaceBetween: 20
      },
      0: {
        slidesPerView: 2,       
        spaceBetween: 20
      },

    }"
        class="slider"
      >
      <swiper-slide v-for="(item, index) in store.getReviewsSlider" :class="{itemSlider: true, active: item.isShow}">
        <p>      
          {{ item.content }}  
        </p>        
        <div @click="showDetails($event, window)" class="details">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import {useReviewsSlider} from '~/stores/reviewsSlider';

const optionsArray = [
  {
    key: '',
    label: 'Отзывы Школа беременных'
  },
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

let el = ref(null)


  export default {
    components: {
      Swiper,
      SwiperSlide
    },

    methods: {
      showDetails(e) {
        if (e.currentTarget.parentNode.classList.contains('active')) {
          window.scrollTo(0, this.posScroll)
          e.currentTarget.parentNode.classList.remove('active')
          return
        }
        if (el.value) {
          el.value.classList.remove('active')
        }
        el.value = e.currentTarget.parentNode
        e.currentTarget.parentNode.classList.add('active')
        this.posScroll = window.scrollY
      }
    },

    setup () {
      
      const store = useReviewsSlider();
      let currSelected = ref(optionsArray[0])
      store.fetchDataReviewsSlider()

      let posScroll = 0;

      function update (value) {
        store.filterReviews(value?.key)
        currSelected.value = value
      }

      return {
        optionsArray,
        update,
        posScroll,
        store,
        currSelected
      }
    }
  }
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  position: relative;
  overflow: visible;
  min-height: 380px;
}

.slider {
  margin-top: 40px;
  width: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;  
   @media screen and (max-width: 1200px) {
      max-width: 560px;
   }
}
.itemSlider {
  max-width: 560px;
  padding: 40px 40px 0px 40px;
  background: #ECE7E1;
  height: 354px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  z-index: 1111;
  transition: .3s;

  &.active {
    height: auto;
    padding-bottom: 70px;
  }

  .details {
    display: flex;
    gap: 3px;
    position: absolute;
    bottom: 20px;
    z-index: 1;
    position: absolute;
    cursor: pointer;
    left: 50%;
    transform: translate(-50%, -50%);
    div {
      width: 5px;
      height: 5px;
      background: #644C5C;
      border-radius: 50%;
    }
  }

  p {
    margin: 0;
    color: #232323;
    line-height: 24px;
  }

  &::before {
    content: "";
    height: 30px;
    width: 100%;
    height: 70px;
    background: rgba(236, 231, 225, .3);
    position: absolute;
    bottom: 0px;
    left: 0;
    border-radius: 15px;
    -webkit-box-shadow: 0px -98px 41px -17px rgba(236, 231, 225, .9) inset;
    -moz-box-shadow: 0px -98px 41px -17px rgba(236, 231, 225, .9) inset;
    box-shadow: 0px -98px 41px -17px rgba(236, 231, 225, .9) inset;

  }

  &::after {
    content: "";
    height: 30px;
    width: 100%;
    background: rgba(236, 231, 225, 1);
    position: absolute;
    bottom: 0px;
    left: 0;
    border-radius: 15px;
    border-bottom: 1px solid rgba(236, 231, 225, 1);
  }
}
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