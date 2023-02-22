<template>
  <div class="button-secondary" :style="calculateStyles">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'title'
    },
    hoverBackground: {
      type: String,
      default: '#644C5C'
    }
  },

  computed: {
    calculateStyles() {
      return {
        '--color-hover': this.hoverBackground
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .button-secondary {
    color: #644C5C;
    background-color: #FEF8F2;
    padding: 18px 45px;
    border-radius: 5px;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    margin: 40px 0 0 0;

    @media screen and (max-width: 680px) {
      font-size: 16px;
      padding: 16px 40px;
    }
  }
</style>
