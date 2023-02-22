<template>
  <div class="projects-page">
    <div class="projects-page__page-navigation-block">
      <h2 class="projects-page__title">
        Проекты
      </h2>
      <div class="projects-page__page-navigations-list">
        <nuxt-link to="/projects#repo" class="projects-page__navigation-item">
          Репро — оживи ячники
        </nuxt-link>
        <nuxt-link to="/projects#meno" class="projects-page__navigation-item">
          Мено — оживи яичники
        </nuxt-link>
        <nuxt-link to="/projects#academy" class="projects-page__navigation-item">
          Академия здоровой жизни
        </nuxt-link>
        <nuxt-link to="/projects#control" class="projects-page__navigation-item">
          Контроль эстрогенов
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects-page {
  width: 100%;

  &__page-navigation-block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 1200px) {
      flex-direction: column;
    }
  }

  &__title {
    color: #644C5C;
    font-size: 38px;
    margin: 0;
  }

  &__page-navigations-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    max-width: 500px;

    @media screen and (max-width: 1200px) {
      justify-content: left;
      margin: 30px 0 0 0;
    }
  }

  &__navigation-item {
    padding: 5px 15px;
    background-color: #839389;
    font-size: 16px;
    height: 34px;
    border-radius: 23px;
    margin: 0 10px 10px 0;
    cursor: pointer;
    transition: background-color .2s;
    color: #FFF;
    text-decoration: none;

    &:hover {
      background-color: #064848;
    }
  }
}
</style>
