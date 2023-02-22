<script setup>
import {useArticlesStore} from '~~/stores/articles/articlesStore';
const store = useArticlesStore()
</script>
<template>
  <h2>Статьи в СМИ</h2>
  <div class="wrapper-card">
    <div v-for="item in store.geDataCardMedia" class="card">
      <img :src="`/_nuxt/assets/images/articles/imgMedia/${item.imgIndex}.png`" />
      <h3 class="heading-card">{{ item.heading }}</h3>
      <p class="title-card">{{ item.decription }}</p>
      <elements-read-articles :href="item.href" class="btnRead" />
    </div>
  </div>
  <elements-button-green class="btnFull" :isLink="false" @click.native="store.setIsFullShow">
    <template v-if="store.isFullShow">Скрыть</template>
    <template v-if="!store.isFullShow">Показать все</template>
  </elements-button-green>
</template>

<style lang="scss" scoped>
  h2 {
    font-family: Oswald;
    font-size: 32px;
    line-height: 41px;
    color:rgba(100, 76, 92, 1);
    width: 100%;
    margin-bottom: 20px;

    @media screen and (max-width: 680px) {
      font-size: 28px;
      line-height: 36px;
      max-width: 270px;
      width: 100%;
    }
  }

  .wrapper-card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
    column-gap: 40px;
    width: 100%;

    @media screen and (max-width: 1200px) {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 20px;
    }

    .card {
      padding: 30px;
      padding-bottom: 52px;
      max-width: 560px;
      width: 100%;
      background: rgba(236, 231, 225, 1);
      border-radius: 15px;
      height: 340px;
      position: relative;

      @media screen and (max-width: 1200px) {
        width: 100%;
        max-width: 100%;
      }

      @media screen and (max-width: 680px) {
        height: auto;
        padding-right: 16px;
      }

      .btnRead {
        position: absolute;
        bottom: 30px;
      }

      .img {
        width: 152px;
        height: 66px;
        background-color: #fff;
        margin-bottom: 30px;
      }

      .heading-card {
        font-family: Oswald;
        font-size: 22px;
        line-height: 28px;
        color:rgba(100, 76, 92, 1);
        margin-bottom: 15px;

        @media screen and (max-width: 680px) {
          font-size: 22px;
          line-height: 28px;
        }
      }

      .title-card {
        font-size: 16px;
        line-height: 24px;
        color: rgba(35, 35, 35, 1);
        margin-bottom: 30px;

        @media screen and (max-width: 680px) {
          font-size: 15px;
          line-height: 22px;
        }
      }
    }
  }
</style>
