<template>
  <div class="main-articles__header">
    <h2 class="main-articles__title">Полезные статьи</h2>
    <nuxt-link to="/articles" class="main-articles__show-more-button">
      Смотреть все статьи
      <svg-arrow-right class="main-articles__arrow-right" />
    </nuxt-link>
  </div>
  <div class="wrapper">
    <div v-for="(item, index) in store.dataUseful.slice(0, 3)" class="cardArticles">
      <img class="main-articles__article-image" :src="`/_nuxt/assets/images/articles/imgUseful/${item.img}.png`"/>
      <h2>{{ item.heading }}</h2>
      <p>{{ item.title }}</p>
      <a @click.prevent="goTo(item.heading, index)" :href="item.href">Читать статью</a>
    </div>
  </div>
</template>
<script>
import {useUsefulStore} from '~~/stores/articles/usefulStore';
export default {
  setup() {
    const store = useUsefulStore();

    return {
      store
    }
  },
  methods: {
    goTo(str, index) {
      this.store.setIndex(index)
      this.$router.push('/articles/' + str)
    }
  }
}
</script>
<style scoped lang="scss">
  .main-articles {
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

    &__title {
      margin-bottom: 40px;
      font-family: Oswald;
      font-size: 32px;
      line-height: 36px;
      color: #644C5C;

      @media screen and (max-width: 680px) {
        font-size: 28px;
        margin-bottom: 20px;
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

    &__article-image {
      width: 100%;
      margin: 0 0 20px 0;
    }

    &__arrow-right {
      fill: #064848;
      margin: 0 0 0 10px;
    }
  }

.cardArticles {
  position: relative;
  height: 400px;

  @media screen and (max-width: 1200px) {
    height: 400px;
  }

  @media screen and (max-width: 680px) {
    height: 350px;
  }
}

.wrapper {
  width: 100%;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }

  @media screen and (max-width: 680px) {
    grid-gap: 20px;
    grid-template-columns: 1fr;
  }

  h2 {
    font-family: 'Oswald';
    font-size: 22px;
    line-height: 130%;
    color: #78353E;
    margin-bottom: 15px;

    @media screen and (max-width: 680px) {
      font-size: 18px;
    }
  }

  p {
    font-size: 16px;
    color: #232323;
    line-height: 150%;

    @media screen and (max-width: 680px) {
      font-size: 15px;
    }
  }

  a {
    position: absolute;
    bottom: 0;
    font-size: 16px;
    text-decoration-line: underline;
    color: #064848;
  }
}
</style>