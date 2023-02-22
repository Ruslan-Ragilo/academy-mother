<script setup>
  import { useWebinarsStore } from '@/stores/webinarsStore'
  const webinars = useWebinarsStore()
</script>

<template>
  <elements-modals-keeper :is-modal-opened="isOpenPopup" @close="isOpenPopup = false">
    <div :class="{['mb-60']: i === 0}" v-if="webinars.dataWebinars[indexDataForPopup]?.idexMixPopup?.length" v-for="(item, i) in webinars.dataWebinars[indexDataForPopup].idexMixPopup">
      <h2>{{ webinars.dataWebinars[item]?.heading }}</h2>
      <p class="for-who">{{ webinars.dataWebinars[item]?.forWhoPopup }}</p>
      <h2>О чем поговорим?</h2>
      <p class="about-webinars" v-html="webinars.dataWebinars[item]?.aboutWebinarsPopup.split('—').map((el, i) => i !== 0 ? '<br> —' + el : null).join('')"></p>
    </div>
    <div v-else>
      <h2>{{ webinars.dataWebinars[indexDataForPopup].heading }}</h2>
      <p class="for-who">{{ webinars.dataWebinars[indexDataForPopup].forWhoPopup }}</p>
      <h2>О чем поговорим?</h2>
      <p class="about-webinars" v-html="webinars.dataWebinars[indexDataForPopup].aboutWebinarsPopup.split('—').map((el, i) => i !== 0 ? '<br> —' + el : null).join('')"></p>
      <div class="mb-60 mt-60" v-if="webinars.dataWebinars[indexDataForPopup].guideNutrition">
        <h2 class="mb-20">Гайд по питанию</h2>
        <p class="mb-40">{{ webinars.dataWebinars[indexDataForPopup].guideNutrition }}</p>
        <h2>О чем поговорим?</h2>
        <p v-html="webinars.dataWebinars[indexDataForPopup].forWhoPopupNuntrition.split('—').map((el, i) => i !== 0 ? '<br> —' + el : null).join('')"></p>
      </div>
      <div class="mb-60" v-if="webinars.dataWebinars[indexDataForPopup].booksRecipes">
        <h2 class="mb-40">Книга рецептов</h2>
        <p>В книге рецептов представлено более 70-ти рецептов разнообразного сбалансированного питания во время беременности, подобранного и составленного мною совместно с педиатром и врачом семейной медицины, включающие салаты, закуски, соусы, первые, вторые блюда, десерты, напитки, завтраки</p>
      </div>
    </div>
    <div class="block-author">
      <img src="~assets/images/avatarAuthor.png" alt="">
      <div>
        <p>Автор вебинара</p>
        <p>Профессор, доктор медицинских наук, специалист по трудным и сложным беременностям Джобава Элисо Мурмановна</p>
      </div>
    </div>
  </elements-modals-keeper>
  <div class="webinars-list">
    <div v-for="(item, index) in webinars.dataWebinars" class="webinars-list__card">
      <div class="webinars-list__card-wrapper-img" :class="`wrapperImg${index + 1}`">
        <img v-if="index === 0" :src="item.img" alt="Вебинар">
        <template v-if="index === 0"><svg-gex class="icon icon1" /><svg-oval-icon class="icon icon2" /><svg-almost-circle class="icon icon3" /></template>
        <img v-if="index > 0 && width > 1200" :src="`/_nuxt/assets/images/webinars/${index}desk.png`" alt="Вебинар">
        <img v-if="index > 0 && width <= 1200 && width > 680" :src="`/_nuxt/assets/images/webinars/${index}tab.png`" alt="Вебинар">
        <img v-if="index > 0 && width <= 680" :src="`/_nuxt/assets/images/webinars/${index}mob.png`" alt="Вебинар">
      </div>
      <div class="webinars-list__card-wrapper-text">
        <p>{{ item.howBe }}</p>
        <h2>{{ item.heading }}</h2>
        <p v-html="item.text" class="how-can-help"></p>
        <div @click="addIndex(index)">
          <elements-collapse-secondary class="collapse" title="Подробней" />
        </div>
        <div class="wraper-price">
          <div>
            <p>СТОИМОСТЬ ПРОГРАММЫ</p>
            <p>{{ item.price }}</p>
          </div>
          <button>Купить программу</button>
        </div>
      </div>
      <section></section>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        width: window.innerWidth,
        str: '',
        isOpenPopup: false,
        indexDataForPopup: 0,
      }
    },
    methods: {
      addIndex(index) {
        this.isOpenPopup = true;
        this.indexDataForPopup = index;
      }
    },
  }
</script>

<style lang="scss" scoped>
  p {
    margin: 0;

    @media screen and (max-width: 680px) {
      font-size: 15px;
    }
  }

  h2 {
    margin: 0;
    font-size: 26px;
    color: rgba(100, 76, 92, 1);
    line-height: 33px;

    @media screen and (max-width: 680px) {
      font-size: 22px;
      line-height: 28px;
      margin-right: 10px;
    }
  }

  .overlay__popup-webinars {
    padding: 60px 74px;
    position: fixed;
    visibility: none;
    height: 0;
    opacity: 0;
    transition: .3s;
    width: 100vw;
    z-index: 11;
    top: 0px;
    background-color: rgba(0, 0, 0, .3);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow-y: scroll;
    pointer-events: none;

    @media screen and (max-width: 680px) {
      padding: 60px 20px 60px 30px;
    }

    &.active {
      visibility: visible;
      height: 100%;;
      opacity: 1;
    }

    .popup {
      padding: 60px;
      background-color: #ECE7E1;
      max-width: 760px;
      height: auto;
      position: relative;

      @media screen and (max-width: 680px) {
        padding: 30px 43px 30px 30px;
      }

      .mb-80 {
        margin-bottom: 80px;
      }

      .mb-60 {
        margin-bottom: 60px;
      }

      .mt-60 {
        margin-top: 60px;
      }

      .mb-40 {
        margin-bottom: 40px;
      }

      .mb-20 {
        margin-bottom: 20px;
      }

      .close-popup {
        position: absolute;
        top: 30px;
        right: 30px;
        cursor: pointer;

        @media screen and (max-width: 680px) {
          right: 20px;
        }
      }

      h2 {
        @media screen and (max-width: 380px) {
          width: 211px;
        }
      }

      .for-who {
        max-width: 540px;
        width: 100%;
        margin-top: 20px;
        margin-bottom: 50px;

        @media screen and (max-width: 680px) {
          margin-bottom: 40px;
        }
      }

      .about-webinars {
        max-width: 579px;
        margin-right: 0;

        @media screen and (max-width: 680px) {
          font-size: 15px;
        }
      }

      .block-author {
        display: flex;
        margin-top: 50px;
        @media screen and (max-width: 680px) {
          flex-direction: column;
          margin-top: 40px;
        }

        img {
          margin-right: 17px;
          width: 100px;
          height: 100px;

          @media screen and (max-width: 680px) {
            width: 60px;
            height: 60px;
            margin-bottom: 10px;
          }
        }

        p:first-child {
          font-size: 14px;
          color: rgba(35, 35, 35, 1);
          text-transform: uppercase;
          margin-bottom: 5px;
        }

        p:last-child {
          font-size: 16px;
          color: rgba(35, 35, 35, 1);
          max-width: 374px;

          @media screen and (max-width: 680px) {
           max-width: 100%;
           font-size: 15px;
          }
        }
      }
    }
  }
  .webinars-list {
    width: 100%;
    margin: 150px 0 0 0;

    @media screen and (max-width: 1200px) {
      margin: 110px 0 0 0;
    }

    @media screen and (max-width: 1200px) {
      margin: 80px 0 0 0;
    }

    &__card {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: flex-start;
      justify-content: space-between;
      position: relative;
      padding-bottom: 70px;
      margin-bottom: 70px;

      @media screen and (max-width: 1200px) {
        display: flex;
        flex-direction: column;
      }

      &:last-child {
        section {
          border-bottom: none;
        }
      }

      &:nth-child(2n) {
        .webinars-list__card-wrapper-img {
          order: 1;

          @media screen and (max-width: 1200px) {
            order: 0;
          }
        }
      }



      .icon {
        position: absolute;
      }

      .wrapperImg1 {
        justify-content: flex-end;
        padding-right: 140px;
        .icon1 {
          top: 68px;
          right: 85px;
          fill: #C5B1B2;
          width: 107px;
          height: 106px;
          transform: rotate(20deg);

          @media screen and (max-width: 1200px) {
            width: 55px;
            height: 55px;
            top: -12px;
            right: -60px;
          }
        }

        .icon2 {
          fill: #C99D7A;
          width: 105px;
          height: 100px;
          bottom: -31px;
          left: 123px;

          @media screen and (max-width: 1200px) {
            display: none;
          }
        }

        .icon3 {
          fill: #644C5C;
          width: 146px;
          height: 140px;
          transform: rotate(-25deg);
          bottom: -10px;
          left: -32px;

          @media screen and (max-width: 1200px) {
            width: 72px;
            height: 70px;
            bottom: 47px;
            left: -4px;
          }

          @media screen and (max-width: 680px) {
            bottom: 41px;
            left: -37px;
          }
        }
      }

      .wrapperImg2 {
        justify-content: flex-end;
        padding-right: 35px;

        @media screen and (max-width: 1200px) {
          padding: 0;

          img {
            width: 300px;
            height: 242px;
          }
        }
      }

      .wrapperImg3 {
        justify-content: flex-start;

        @media screen and (max-width: 1200px) {
          padding: 0;

          img {
            width: 391px;
            height: 251px;

            @media screen and (max-width: 680px) {
              width: 300px;
              height: 251px;
            }
          }
        }
      }

      .wrapperImg4 {
        justify-content: flex-end;
        padding-right: 45px;

        @media screen and (max-width: 1200px) {
          padding: 0;

          img {
            width: 290px;
            height: 228px;
          }
        }
      }

      .wrapperImg5 {
        justify-content: flex-start;

        @media screen and (max-width: 1200px) {
          padding: 0;

          img {
            width: 281px;
            height: 233px;
          }
        }
      }

      .wrapperImg6 {
        justify-content: flex-end;
        padding-right: 42px;

        @media screen and (max-width: 1200px) {
          padding: 0;

          img {
            width: 282px;
            height: 240px;
          }
        }
      }

      .wrapperImg7 {
        justify-content: flex-end;
        position: relative;
        right: 95px;

        @media screen and (max-width: 1200px) {
          right: 24px;

          img {
            width: 318px;
            height: 380px;
          }
        }
      }

      .wrapperImg8 {
        justify-content: flex-end;

        @media screen and (max-width: 1200px) {
          padding: 0;

          img {
            width: 366px;
            height: 274px;

            @media screen and (max-width: 680px) {
              width: 306px;
              height: 254px;
            }
          }
        }
      }

      .wrapperImg9 {
        justify-content: flex-end;
        position: relative;
        right: 122px;

        @media screen and (max-width: 1200px) {
          padding: 0;
          position: static;

          img {
            width: 265px;
            height: 248px;
          }
        }
      }

      section {
        border-bottom: 1px solid rgba(197, 177, 178, 1);
        width: 100%;
        position: absolute;
        bottom: 0px;

        @media screen and (max-width: 1200px) {
          width: 100vw;
          margin-left: calc(50% - 50vw)
        }
      }

      &-wrapper-img {
        position: relative;
        display: flex;
        width: 100%;
        @media screen and (max-width: 1200px) {
          align-items: flex-start;
          justify-content: flex-start!important;
          width: fit-content;
          padding-right: 0!important;
        }

        @media screen and (max-width: 680px) {
          margin: 0 auto;
        }

        img {
          @media screen and (max-width: 1200px) {
            width: 198px;
            height: 180px;
            margin-bottom: 60px;
          }

          @media screen and (max-width: 680px) {
            margin-left: 0;
            margin-bottom: 50px;
          }
        }
      }

      &-wrapper-text {
        display: flex;
        flex-direction: column;
        max-width: 560px;
        width: 100%;

        p:first-child {
          font-size: 14px;
          color: rgba(35, 35, 35, 1);
          text-transform: uppercase;
        }

        h2 {
          @media screen and (max-width: 680px) {
            margin-top: 10px;
          }
        }

        .how-can-help {
          font-size: 16px;
          line-height: 24px;
          color: rgba(35, 35, 35, 1);
          margin-top: 20px;

          @media screen and (max-width: 680px) {
            font-size: 15px;
            line-height: 22px;
            margin-top: 15px;
          }
        }

        .collapse {
          border-bottom: 1px solid rgba(197, 177, 178, 1);
          margin-top: 40px;
          pointer-events: none;
        }

        .wraper-price {
          margin-top: 50px;
          display: flex;
          justify-content: space-between;

          @media screen and (max-width: 680px) {
            flex-direction: column;
            margin-top: 30px;
          }

          p:last-child {
            margin-top: 10px;
            font-family: Oswald;
            font-size: 22px;
            font-weight: 700;
            color: rgba(100, 76, 92, 1);
          }

          button {
            background: rgba(6, 72, 72, 1);
            border: none;
            color: white;
            padding: 18px 45px;
            font-size: 18px;
            outline: none;
            cursor: pointer;
            border-radius: 5px;

            @media screen and (max-width: 680px) {
              width: fit-content;
              margin-top: 30px;
            }
          }
        }
      }
    }
  }
</style>
