<template>
  <h2 class="heading">Полезные статьи</h2>
  <div class="wrapper">
    <div v-for="(item, index) in store.dataUseful" class="cardArticles">
      <img :src="`/_nuxt/assets/images/articles/imgUseful/${item.img}.png`"/>
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
  .heading {
    margin-top: 150px;
    margin-bottom: 40px;
    width: 100%;
    font-family: Oswald;
    font-size: 32px;
    line-height: 36px;
    color: #644C5C;

    @media screen and (max-width: 680px) {
      font-size: 28px;
      margin-bottom: 80px;
      margin-top: 50px;
    }
  }

  .cardArticles {
    position: relative;
    height: 400px;
    width: 360px;

    @media screen and (max-width: 1200px) {
      height: 400px;
      width: 300px;
      margin-bottom: 20px;
    }

    @media screen and (max-width: 680px) {
      height: 350px;
    }
  }

  .wrapper {
    width: 100%;
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    margin-bottom: 30px;

    @media screen and (max-width: 1200px) {
      gap: 10px;
      justify-content: space-between;
    }

    @media screen and (max-width: 680px) {
      gap: 10px;
      justify-content: center;
    }

    img {
      margin-bottom: 20px;

      @media screen and (max-width: 1200px) {
        width: 300px;
      }
    }

    h2 {
      font-family: 'Oswald';
      font-size: 22px;
      line-height: 130%;
      color: #78353E;
      margin-bottom: 10px;
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
