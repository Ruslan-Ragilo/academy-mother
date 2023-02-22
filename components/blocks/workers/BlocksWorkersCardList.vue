<template>
  <div class="workers-list">
    <h2 class="workers-list__title">
      Специалистам и медработникам
    </h2>
    <div
      v-for="(item, index) in data"
      :class="{
        'workers-list__card': true,
        'workers-list__card_reversed': index % 2 === 1
      }"
    >
      <img class="workers-list__card-image" :src="item?.image" />
      <div class="workers-list__info-panel">
        <div class="workers-list__product-type">
          {{ item?.type }}
        </div>
        <h2 class="workers-list__product-title">
          {{ item?.title }}
        </h2>
        <div class="workers-list__product-description">
          {{ item?.description }}
        </div>
        <div v-if="item?.isDetailed" class="workers-list__detailed-button" @click="openModal(item)">
          Подробнее
          <div class="workers-list__detailed-button-cross" />
        </div>
        <div class="workers-list__cost-block">
          <div class="workers-list__cost-wrapper">
            <div class="workers-list__cost-label">
              СТОИМОСТЬ ПРОГРАММЫ
            </div>
            <div class="workers-list__cost">
              {{ item?.cost }}
            </div>
          </div>
          <div class="workers-list__purchase-button">
            Купить программу
          </div>
        </div>
        <div v-if="item?.isSpecial" class="workers-list__additional">
          При покупке пакета из двух вебинаров действует спецпредложение
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },

    emits: ['openModal'],

    setup (props, { emit }) {

      function openModal (data) {
        emit('openModal', data)
      }

      return {
        openModal
      }
    }
  }
</script>

<style lang="scss" scoped>
  .workers-list {
    width: 100%;

    &__title {
      color: #644C5C;
      font-size: 38px;
      margin: 0;

      @media screen and (max-width: 1200px) {
        font-size: 36px;
      }

      @media screen and (max-width: 680px) {
        font-size: 30px;
      }
    }

    &__card {
      margin: 40px 0 0 0;
      padding: 70px 0 0 0;
      border-top: 1px solid #C5B1B2;
      display: flex;
      justify-content: space-between;

      &_reversed {

        .workers-list__info-panel {
          order: -1;

          @media screen and (max-width: 1200px) {
            order: 0;
          }
        }
      }

      @media screen and (max-width: 1200px) {
        flex-direction: column;
      }
    }

    &__card-image {
      width: 35%;

      @media screen and (max-width: 1200px) {
        width: 50%;
      }
    }

    &__info-panel {
      width: 50%;

      @media screen and (max-width: 1200px) {
        width: 100%;
      }
    }

    &__product-type {
      font-size: 14px;
      line-height: 21px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: #232323;

      @media screen and (max-width: 1200px) {
        margin: 40px 0 0 0;
      }
    }

    &__product-title {
      color: #644C5C;
      font-size: 26px;
      line-height: 34px;
      margin: 10px 0 0 0;

      @media screen and (max-width: 680px) {
        font-size: 22px;
      }
    }

    &__product-description {
      font-size: 14px;
      line-height: 21px;
      color: #232323;
      margin: 20px 0 0 0;
    }

    &__detailed-button {
      position: relative;
      cursor: pointer;
      color: #78353E;
      font-family: Oswald;
      font-size: 22px;
      font-weight: 700;
      margin: 40px 0 0 0;
      padding: 20px 0 23px 0;
      border-top: 1px solid #C5B1B2;
      border-bottom: 1px solid #C5B1B2;
    }

    &__detailed-button-cross {
      position: absolute;
      right: 0;
      top: 20px;
      width: 25px;
      height: 25px;

      &:after,
      &:before {
        position: absolute;
        top: 18px;
        content: '';
        width: 25px;
        height: 1px;
        background-color: #064848;
      }

      &:before {
        transform: rotate(90deg);
      }
    }

    &__cost-block {
      margin: 50px 0 0 0;
      display: flex;

      @media screen and (max-width: 680px) {
        flex-direction: column;
      }
    }

    &__cost-wrapper {
      width: 50%;
    }

    &__cost-label {
      color: #232323;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: 0.03em;
    }

    &__cost {
      margin: 10px 0 0 0;
      color: #644C5C;
      font-family: Oswald;
      font-weight: 700;
      font-size: 22px;
    }

    &__purchase-button {
      background-color: #064848;
      padding: 18px 45px;
      border-radius: 5px;
      color: #FEF8F2;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
      text-align: center;

      @media screen and (max-width: 680px) {
        font-size: 16px;
        margin: 30px 0 0 0;
        max-width: 70%;
      }
    }

    &__additional {
      margin: 30px 0 0 0;
      max-width: 50%;
      color: #232323;
      font-size: 16px;
      line-height: 150%;

      @media screen and (max-width: 1200px) {
        max-width: 70%;
      }
    }
  }
</style>
