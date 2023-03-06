<template>
  <div class="med-workers-page section-container">
    <blocks-workers-card-list :med="true" :data="store.getDataMedWor" @openModal="openModal" />
    <blocks-description-minor class="section-block" label="Об авторе" :title="descriptionTitle" :list-items="descriptionItems" />
    <blocks-message-us class="section-block" />
    <elements-modals-keeper :is-modal-opened="isModalOpened" @close="switchModal()">
      <h3 class="med-workers-page__modal-title">
        {{ currentModalData?.popupMed.title }}
      </h3>
      <div class="med-workers-page__modal-label">
        {{ currentModalData?.popupMed.subTitle }}
      </div>
      <h4 class="med-workers-page__secondary-title">
        О чем поговорим?
      </h4>
      <ul class="med-workers-page__modal-list">
        <li v-for="item in currentModalData?.popupMed.About.split('—').slice(1, -1)" class="med-workers-page__modal-item">
          {{ item }}
        </li>
      </ul>
      <div class="med-workers-page__author-block">
        <img class="med-workers-page__author-image" src="@/assets/images/MainPageDescriptionImageMinor.png" />
        <div class="med-workers-page__about-author">
          <div class="med-workers-page__author-label">
            Автор Вебинара
          </div>
          <div class="med-workers-page__author-title">
            {{ currentModalData?.author.authorTitle }}
          </div>
        </div>
      </div>
    </elements-modals-keeper>
  </div>
</template>

<script>
import {useForMedWork} from '~/stores/formedWorkStore'

const descriptionTitle = 'Элисо Джобава — профессор, доктор медицинских наук, специалист по трудным и сложным беременностям'

const descriptionItems = [
  'Автор более 300 научных статей и 9 монографий и практических руководств',
  'Член международного общества гинекологов-эндокринологов и общества по изучению проблем гемостаза в акушерстве и гинекологии',
  'Многократный участник международных и российских медицинских конференций и клинических исследований'
]

  export default {

    setup () {
      const isModalOpened = ref(false)
      const store = useForMedWork();
      store.fetchDataMedWor()

      const currentModalData = ref(null)

      function switchModal () {
        isModalOpened.value = !isModalOpened.value
      }

      function openModal (data) {
        currentModalData.value = data
        switchModal()
      }

      return {
        descriptionItems,
        descriptionTitle,
        isModalOpened,
        currentModalData,
        switchModal,
        openModal,
        store
      }
    }
  }
</script>

<style lang="scss" scoped>
  .med-workers-page {

    &__modal-title {
      color: #644C5C;
      font-size: 26px;
      margin: 0 0 20px 0;

      @media screen and (max-width: 680px) {
        font-size: 22px;
      }
    }

    &__modal-list {
      list-style: none;
      padding: 0;

      li::before {
        content: '—';
      }
    }

    &__modal-item {
      font-size: 14px;
      line-height: 24px;
      color: #232323;
      margin: 0 0 5px 0;
    }

    &__secondary-title {
      color: #78353E;
      font-size: 22px;
      margin: 50px 0 0 0;

      @media screen and (max-width: 680px) {
        font-size: 18px;
      }
    }

    &__modal-label {
      font-size: 16px;
      color: #232323;
    }

    &__author-block {
      margin: 50px 0 0 0;
      display: flex;

      @media screen and (max-width: 680px) {
        flex-direction: column;
      }
    }

    &__author-image {
      width: 100px;
      height: 100px;
      margin: 0 20px 0 0;
    }

    &__author-label {
      font-size: 16px;
      line-height: 24px;
      color: #232323;
      text-transform: uppercase;

      @media screen and (max-width: 680px) {
        margin: 10px 0 0 0;
      }
    }

    &__author-title {
      margin: 5px 0 0 0;
      font-size: 16px;
      line-height: 24px;
      color: #232323;
    }
  }
</style>
