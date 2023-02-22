<template>
  <div class="about-intro">
    <div class="about-intro__left-column">
      <div class="about-intro__label">
        ОСНОВАТЕЛЬНИЦА АКАДЕМИИ
      </div>
      <h2 class="about-intro__name">
        Элисо Джобава — врач-акушер высшей категории, профессор, доктор медицинских наук
      </h2>
      <div class="about-intro__button-container">
        <elements-buttons-secondary title="Посмотреть дипломы" @click="openFancyBox" />
      </div>
    </div>
    <div class="about-intro__right-column">
      <img class="about-intro__image" src="@/assets/images/aboutIntroPhoto.png">
      <svg-star class="about-intro__star" />
      <svg-diamond-icon class="about-intro__diamond" />
    </div>
    <svg-almost-circle class="about-intro__almost-circle" />
  </div>
</template>

<script>
import { Fancybox } from '@fancyapps/ui/src/Fancybox/Fancybox'
import '@fancyapps/ui/dist/fancybox.css'

  export default {
    setup () {
      const gallery = [
        {
          src: "_nuxt/static/images/diploma.png"
        }
      ]

      function openFancyBox (e) {
        Fancybox.show(gallery, {})
      }

      return {
        openFancyBox
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about-intro {
    position: relative;
    width: 100%;
    padding: 60px 150px 60px 60px;
    background: #644C5C;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1200px) {
      padding: 60px;
      flex-direction: column;
    }

    @media screen and (max-width: 680px) {
      padding: 30px;
    }

    &__left-column {
      max-width: 45%;

      @media screen and (max-width: 1200px) {
        max-width: 100%;
        margin: 50px 0 0 0;
      }
    }

    &__right-column {
      position: relative;
      width: 300px;
      display: flex;
      align-items: center;

      @media screen and (max-width: 1200px) {
        order: -1;
        width: 100%;
        justify-content: center;
      }
    }

    &__image {
      max-width: 300px;
      width: 100%;
      height: 100%;
    }

    &__label {
      color: #FEF8F2;
      letter-spacing: 0.03em;
      font-size: 14px;

      @media screen and (max-width: 1200px) {
        text-align: center;
      }
    }

    &__name {
      color: #FEF8F2;
      font-size: 32px;
      line-height: 130%;

      @media screen and (max-width: 1200px) {
        text-align: center;
        font-size: 30px;
      }

      @media screen and (max-width: 680px) {
        font-size: 26px;
      }
    }

    &__button-container {
      display: flex;
      margin: 40px 0 0 0;

      @media screen and (max-width: 1200px) {
        justify-content: center;
      }
    }

    &__almost-circle {
      position: absolute;
      right: -25px;
      top: 50px;
      fill: #C5B1B2;
      transform: rotate(-70deg);

      @media screen and (max-width: 680px) {
        top: -20px;
        right: 30px;
      }
    }

    &__star {
      position: absolute;
      top: -10px;
      left: -10px;
      fill: #C99D7A;
    }

    &__diamond {
      position: absolute;
      right: -40px;
      bottom: 30px;
      fill: #FEF8F2;
      transform: scale(0.6);

      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
  }
</style>
