<script setup>
import {useArticlesStore} from '~~/stores/articles/articlesStore';
const store = useArticlesStore()
</script>

<template>
  <div class="main-media-articles">
    <div class="main-media-articles__header">
      <h2 class="heading">Статьи в СМИ</h2>
      <nuxt-link to="/articles" class="main-media-articles__show-more-button">
        Смотреть все статьи
        <svg-arrow-right class="main-media-articles__arrow-right" />
      </nuxt-link>
    </div>
    <div class="wrapper-card">
      <div v-for="item in store.geDataCardMedia.slice(0, 3)" class="card">
        <img :src="`/_nuxt/assets/images/articles/imgMedia/${item.imgIndex}.png`" />
        <h3 class="heading-card">{{ item.heading }}</h3>
        <p class="title-card">{{ item.decription }}</p>
        <elements-read-articles :href="item.href" class="btnRead" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .main-media-articles {
    width: 100%;

    &__header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media screen and (max-width: 680px) {
        flex-direction: column;
        align-items: flex-start;
      }
    }

    &__show-more-button {
      white-space: nowrap;
      color: #064848;
      font-weight: 600;
      font-size: 18px;
      text-decoration: none;

      @media screen and (max-width: 680px) {
        margin: 0 0 20px 0;
      }
    }

    &__arrow-right {
      fill: #064848;
      margin: 0 0 0 10px;
    }
  }
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
  grid-template-columns: 1fr 1fr;
  row-gap: 30px;
  column-gap: 40px;
  width: 100%;

  @media screen and (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;
  }

  .card {
    padding: 30px;
    padding-bottom: 52px;
    width: 100%;
    background: rgba(236, 231, 225, 1);
    border-radius: 15px;
    height: 340px;
    position: relative;

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