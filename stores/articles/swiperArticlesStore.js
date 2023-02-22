import { defineStore } from 'pinia'

export const useSwiperArticlesStore = defineStore('swiperArticlesStore ', {
  state: () => ({
    dataSwiper: [
      {
        years: 2021,
        heading: 'Starostin Magnesium level correlation with clinical status and quality of life in women with hormone related conditions and pregnancy based on real world data',
        href: 'https://www.nature.com/articles/s41598-021-85156-y',
        authors: 'Eliso Djobava, Svetlana Orlova, Galina Dikke, Gisele Pickering, Sofya Konchits & Kirill'
      },
      {
        years: 2020,
        heading: 'Заключение совещания экспертов «Обоснование применения средств на основе инозитола у пациенток с нарушениями менструального цикла»',
        href: 'https://www.mediasphera.ru/issues/problemy-reproduktsii/2020/1/1102572172020011044',
        authors: 'Воронцова А.В., Гаспарян С.А., Громова О.А., Джобава Э.М., Киселева Е.Ю. и др.'
      },
      {
        years: 2019,
        heading: 'Материнский стресс и здоровье ребенка в краткосрочной и долгосрочной перспективе',
        href: 'https://www.mediasphera.ru/issues/rossijskij-vestnik-akushera-ginekologa/2013/2/031726-6122201327',
        authors: 'Джобава Э.М., Акарачкова Е.С., Артеменко А.Р., Беляев А.А., Блинов Д.В. и др.'
      },
      {
        years: 2019,
        heading: 'ST-elevation myocardial infarction, pulmonary embolism, and cerebral ischemic stroke in a patient with critically low levels of natural anticoagulants',
        href: 'https://pubmed.ncbi.nlm.nih.gov/32153685/',
        authors: 'Reznik E.V., Shcherbakova E.S., Dzhobava E.M. и др.'
      },
      {
        years: 2018,
        heading: 'Вопросы безопасности применения Дротаверина в акушерской практике',
        href: 'https://www.gynecology.su/jour/article/view/470?locale=ru_RU',
        authors: 'Джобава Э.М.'
      },
      {
        years: 2018,
        heading: 'Фетальное программирование. Акушерство и гинекология',
        href: 'https://aig-journal.ru/articles/Fetalnoe-programmirovanie.html',
        authors: 'Джобава Э.М.'
      },
      {
        years: 2016,
        heading: 'Оксидативный стресс, дисфункция эндотелия, дисбаланс цитокинов, гонадотропный синергизм, или все о токофероле в практике врача',
        href: 'https://cyberleninka.ru/article/n/oksidativnyy-stress-disfunktsiya-endoteliya-disbalans-tsitokinov-gonadotropnyy-sinergizm-ili-vse-o-tokoferole-v-praktike-vracha',
        authors: 'Джобава Э.М.'
      },
      {
        years: 2016,
        heading: 'Прегравидарная подготовка как скрининг и рутинная практика. Международный опыт и клинические рекомендации',
        href: 'https://aig-journal.ru/articles/Pregravidarnaya-podgotovka-kak-skrining-i-rutinnaya-praktika-Mejdunarodnyi-opyt-i-klinicheskie-rekomendacii.html',
        authors: 'Джобава Э.М.'
      },

      {
        years: 2014,
        heading: 'Результаты исследования распространенности дефицита магния у беременных. Акушерство и гинекология.',
        href: 'https://aig-journal.ru/articles/Rezultaty-issledovaniya-rasprostranennosti-deficita-magniya-u-beremennyh.html',
        authors: 'Серов В.Н., Блинов Д.В., Зимовина У.В., Джобава Э.М.'
      },
      {
        years: 2013,
        heading: 'Гестационный сахарный диабет – болезнь популяции. Медикаментозная терапия угрозы прерывания беременности и углеводный обмен',
        href: 'https://cyberleninka.ru/article/n/gestatsionnyy-saharnyy-diabet-bolezn-populyatsii-medikamentoznaya-terapiya-ugrozy-preryvaniya-beremennosti-i-uglevodnyy-obmen-obzor',
        authors: 'Джобава Э.М., Некрасова К.Р., Доброхотова Ю.Э. и др.'
      },
      {
        years: 2013,
        heading: 'Дисфункция эндотелия и система гемостаза в группах риска по развитию акушерской патологии. Системный подход к диагностике и терапии.',
        href: 'https://cyberleninka.ru/article/n/disfunktsiya-endoteliya-i-sistema-gemostaza-v-gruppah-riska-po-razvitiyu-akusherskoy-patologii-sistemnyy-podhod-k-diagnostike-i-terapii',
        authors: 'Джобава Э.М., Блинов Д.В., Доброхотова Ю.Э. и др.'
      },
      {
        years: 2013,
        heading: 'Роль дефицита магния в патогенезе гестоза. Российский вестник акушера-гинеколога',
        href: 'https://www.mediasphera.ru/issues/rossijskij-vestnik-akushera-ginekologa/2013/2/031726-6122201327',
        authors: 'Кнышева И.Г., Джобава Э.М., Доброхотова Ю.Э.'
      }
    ]
  }),
  getters: {
    getIsOpen() {
      return this.isOpen
    }
  },
  actions: {
    setIsOpen() {
      this.isOpen = !this.isOpen
    }
  }
})