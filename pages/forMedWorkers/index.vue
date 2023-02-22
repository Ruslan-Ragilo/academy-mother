<template>
  <div class="med-workers-page section-container">
    <blocks-workers-card-list :data="data" @openModal="openModal" />
    <blocks-description-minor class="section-block" label="Об авторе" :title="descriptionTitle" :list-items="descriptionItems" />
    <blocks-message-us class="section-block" />
    <elements-modals-keeper :is-modal-opened="isModalOpened" @close="switchModal()">
      <h3 class="med-workers-page__modal-title">
        {{ currentModalData?.title }}
      </h3>
      <div class="med-workers-page__modal-label">
        {{ currentModalData?.for }}
      </div>
      <h4 class="med-workers-page__secondary-title">
        О чем поговорим?
      </h4>
      <ul class="med-workers-page__modal-list">
        <li v-for="item in currentModalData?.talkAbout" class="med-workers-page__modal-item">
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
            Профессор, доктор медицинских наук,
            специалист по трудным и сложным беременностям
            Джобава Элисо Мурмановна
          </div>
        </div>
      </div>
    </elements-modals-keeper>
  </div>
</template>

<script>
const data = [
  {
    type: 'запись вебинара + доступ 3 месяца',
    title: 'Вебинар «Бесплодие. Целостный взгляд на проблему. Как оптимально достичь родов»',
    description: 'Вебинар предназначен для специалистов, которые хотят обновить свои знания по вопросу ' +
                  'бесплодия и усовершенствовать навыки, переняв опыт эксперта мирового уровня.',
    cost: '2.500 руб.',
    isDetailed: true,
    isSpecial: true,
    image: '_nuxt/static/images/webinar1.png',
    for: 'Для врачей акушеров-гинекологов',
    talkAbout: [
      '— О стратегиях глобального комплексного подхода в обследовании и лечении бесплодной пары.',
      '— Авторские протоколы и секреты профессора Джобава Э.М. в диагностике и терапии отдельных клинических ситуаций при разборе всех причин бесплодия поэтапно.',
      '— Обсудим ановуляцию (олигоовуляция), трубно-перитонеальный фактор, маточный фактор, шеечный фактор, мужской фактор, бесплодие неясного генеза.',
      '— Разберем стратегию принятия решения об ЭКО, нюансы для врачей, которые не являются специалистами клиник ЭКО. Нюансы сопровождения протокола ЭКО в целом и при криоконсервации яйцеклеток. Методы прайминга яйцеклеток и повышения овариального резерва.'
    ]
  },
  {
    type: 'запись вебинара + доступ 3 месяца',
    title: 'Вебинар «Авторские протоколы ведения беременности групп высокого риска. Обоснованные индивидуализированные стратегии за рамками стандартов»',
    description: 'Вебинар содержит авторские подходы к ведению беременности, с учетом существующих клинических протоколов' +
      'и данных доказательной медицины. Также вебинар содержит интегративные стратегии ведения беременности и оптимальные' +
      'схемы нутрицевтической поддержки и коррекции различных патологических состояний при беременности.',
    cost: '4.000 руб.',
    isDetailed: true,
    isSpecial: true,
    image: '_nuxt/static/images/webinar2.png',
    for: 'Для врачей акушеров-гинекологов',
    talkAbout: [
      '— Тактика ведения беременных с хроническими заболеваниями',
      '— Тактика ведения беременных с бесплодием в анамнезе, в том числе после ЭКО',
      '— Тактика ведения беременных с невынашиванием беременности',
      '— Тактика ведения беременных в старшем репродуктивном возрасте',
      '— В вебинаре представлены схемы обследования и терапии основных состояний по триместрам беременности. А также: Схемы мониторинга функции плаценты, Схемы коррекции и профилактики дисфункции плаценты'
    ]
  },
  {
    type: '2 вебинара в записи + доступ 6 месяцев',
    title: 'Пакет для специалистов',
    description: '— Вебинар «Бесплодие. Целостный взгляд на проблему. Как оптимально достичь родов»\n' +
      '— Вебинар «Авторские протоколы ведения беременности групп высокого риска. Обоснованные индивидуализированные стратегии за рамками стандартов»',
    cost: '6.000 руб.',
    isDetailed: false,
    isSpecial: false,
    image: '_nuxt/static/images/webinar3.png'
  }
]

const descriptionTitle = 'Элисо Джобава — профессор, доктор медицинских наук, специалист по трудным и сложным беременностям'

const descriptionItems = [
  'Автор более 300 научных статей и 9 монографий и практических руководств',
  'Член международного общества гинекологов-эндокринологов и общества по изучению проблем гемостаза в акушерстве и гинекологии',
  'Многократный участник международных и российских медицинских конференций и клинических исследований'
]

  export default {

    setup () {
      const isModalOpened = ref(false)

      const currentModalData = ref(null)

      function switchModal () {
        isModalOpened.value = !isModalOpened.value
      }

      function openModal (data) {
        currentModalData.value = data
        switchModal()
      }

      return {
        data,
        descriptionItems,
        descriptionTitle,
        isModalOpened,
        currentModalData,
        switchModal,
        openModal
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
