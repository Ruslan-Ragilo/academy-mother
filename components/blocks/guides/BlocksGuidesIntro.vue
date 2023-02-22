<template>
  <div class="guides-intro">
    <h2 class="guides-intro__title">
      Гайды и методички
    </h2>
    <div class="guides-intro__text">
      Подробные гайды и методички, которые помогут разобраться беременным и мамам в важных вопросах
    </div>
    <div class="guides-intro__button-wrapper">
      <div class="guides-intro__button">
        Выбрать материал
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .guides-intro {
    background-color: #C99D7A;
    border-radius: 15px;
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 90px 0 0 0;

    &__title {
      font-size: 38px;
      color: #FEF8F2;
      margin: 0;
    }

    &__text {
      margin: 20px 0 0 0;
      max-width: 500px;
      text-align: center;
      color: #FEF8F2;
      font-size: 16px;
      line-height: 150%;
    }

    &__button-wrapper {
      margin: 40px 0 0 0;
      display: flex;
    }

    &__button {
      background-color: #FEF8F2;
      border-radius: 5px;
      font-size: 18px;
      font-weight: 600;
      color: #644C5C;
      padding: 18px 45px;
      cursor: pointer;
    }
  }
</style>