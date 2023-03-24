<template>
  <div class="if-item">
    <div class="if-item__icon-box">
      <img :src="'http://95.163.236.196:1337' + iconName" alt="icon">
    </div>
    <div class="if-item__text" v-html="text" />
  </div>
</template>

<script>

  export default {
    props: {
      iconName: {
        type: String,
        default: ''
      },
      iconColor: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      }
    },
  }
</script>

<style lang="scss" scoped>
  .if-item {

    @media screen and (max-width: 680px) {
      display: flex;
      align-items: center;
    }

    &__icon-box {
      width: 40px;
      height: 40px;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &__text {
      font-size: 16px;
      line-height: 24px;
      color: #232323;
      margin: 20px 0 0 0;
      max-width: 90%;
      font-weight: 400;

      @media screen and (max-width: 680px) {
        font-size: 15px;
        margin: 0 0 0 20px;
        max-width: calc(100% - 60px);
      }
    }

  }
</style>
