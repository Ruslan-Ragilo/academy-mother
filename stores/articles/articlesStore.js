import { defineStore } from 'pinia'

export const useArticlesStore = defineStore('articlesStore', {
  state: () => ({
    isFullShow: false,
    dataCard: [
      {
        folder: 'articles',
        heading: 'Авторская программа по восстановлению после родов',
        title: 'Программа содержит поэтапный план реабилитации организма женщины после родов (включая особенности восстановления после КС), а также информацию, как сделать саму операцию более физиологичной для малыша.',
        btnText: 'Скачать бесплатно',
        headingPopup: 'Вы узнаете:',
        contentPopup: '— Какие способы обезболивания выбрать во время операции и после — Чем вы можете помочь себе ещё до выписки из роддома — При помощи чего избежать рубцов и растяжек — Как наладить лактацию без болезненных последствий — Какие упражнения помогут восстановить мышцы (в т.ч. и интимные) в кратчайшие сроки — И многое другое о послеродовом восстановлении'
      },
      {
        folder: 'articles',
        heading: 'Гайд по женскому здоровью от 0 до 99 лет',
        title: 'В гайде содержится информация о физиологических особенностях и плановом обследовании в разные периоды жизни женщины.',
        btnText: 'Скачать бесплатно',
        headingPopup: 'Вы узнаете:',
        contentPopup: '— Какие переходные явления сопровождают новорожденных девочек и как правильно осуществлять уход за их половыми органами — О чём стоит поговорить с девочками дошкольного возраста и на что обратить внимание — Чем характеризуется пубертатный возраст девочек и как помочь справиться с изменениями тела — Что является нормой и как часто необходимо посещать гинеколога — Как подготовиться к беременности и что ожидать после родов — С какого возраста готовиться к менопаузе и как гармонично прожить этот этап и многое другое'
      },
      {
        folder: 'articles',
        heading: 'Чек-лист «Биострахование малыша»',
        title: 'В чек-листе содержится информация о методах неинвазивной пренатальной диагностики, основанных на генетике, а не на «ориентировочном» пренатальном скрининге (УЗИ и белки/гормоны).',
        btnText: 'Скачать бесплатно',
        headingPopup: 'Вы узнаете:',
        contentPopup: '— Какие пренатальные тесты существуют, на каких сроках они проводятся и что позволяют выяснить — Чем отличаются панели НИПТ и как выбрать нужную — Где сделать НИПТ, чтобы получить наиболее качественные результаты — Что такое «банкинг стволовых клеток» и для чего используется — Как происходит процедура сбора стволовых клеток и где их хранить до дня Х'
      },
      {
        folder: 'articles',
        heading: 'Чек-лист «Реабилитация после потери беременности»',
        title: 'В чек-листе содержится информация о том, как восстановить организм после потери беременности и что важно сделать, чтобы ситуация не повторилась.',
        btnText: 'Скачать бесплатно',
        headingPopup: 'Вы узнаете:',
        contentPopup: '— Как выяснить причины прерывания беременности в зависимости от возраста и какие обследования для этого нужны — В каких лабораториях проводят необходимые анализы — Какие методы прерывания беременности существуют — Принципы реабилитации после потери беременности'
      },
      {
        folder: 'articles',
        heading: 'Чек-лист «Подготовка к ЭКО и/или криоконсервации яйцеклеток»',
        title: 'В чек-листе содержится информация обо всех нюансах ЭКО и криоконсервации: о подготовке, важных моментах и правилах, необходимых для положительного результата.',
        btnText: 'Скачать бесплатно',
        headingPopup: 'Вы узнаете:',
        contentPopup: '— Как правильно подготовиться к забору клеток перед ЭКО — Какие протоколы ЭКО существуют — Что такое криоконсервация, кому она подходит и почему её лучше делать до 35 лет — Какие обследования необходимо пройти перед беременностью на фоне ЭКО или при использовании замороженных яйцеклеток'
      }
    ],
    dataCardMedia: [
      {
        heading: 'Женская сексуальность после 40 лет: привычки, которые помогут вам повысить либидо',
        decription: 'О том, какие правила необходимо соблюдать после 40 лет, чтобы держать себя в тонусе',
        imgIndex: 1,
        href: 'https://www.marieclaire.ru/krasota/zhenskaya-seksualnost-posle-40-let-privychki-kotorye-pomogut-vam-povysit-libido/'
      },
      {
        heading: 'Фитоэстрогены: плюсы и минусы объясняет врач-гинеколог',
        decription: 'О том, как фитоэстрогены помогают комфортно войти в менопаузу и прожить ее',
        imgIndex: 2,
        href: 'https://lisa.ru/zdorovye/779012-fitoestrogeny-plyusy-i-minusy-obyasnyaet-vrach-ginekolog/'
      },
      {
        heading: 'Антиэйдж-уход для груди: как сохранить красоту зоны декольте после 40+',
        decription: 'О том, как бороться с возрастными изменениями груди',
        imgIndex: 3,
        href: 'https://graziamagazine.ru/beauty/antieydzh-uhod-dlya-grudi-kak-sohranit-krasotu-zony-dekolte-posle-40/'
      },
      {
        heading: 'Неочевидные факты о климаксе, о которых должна знать каждая, чтобы не паниковать',
        decription: 'Подробно о деликатном периоде жизни',
        imgIndex: 3,
        href: 'https://graziamagazine.ru/beauty/neochevidnye-fakty-o-klimakse-o-kotoryh-dolzhna-znat-kazhdaya-chtoby-ne-panikovat/'
      },
      {
        heading: 'Работа над собой: 5 советов как оставаться в тонусе после 30 лет',
        decription: 'О том, как продлить молодость и улучшить качество жизни после 30',
        imgIndex: 4,
        href: 'https://www.baby.ru/wiki/kak-ostavatsya-v-tonuse-posle-30-let/ '
      },
      {
        heading: 'Врач раскрыл главные секреты вечной молодости',
        decription: 'О профилактике старения',
        imgIndex: 5,
        href: 'https://eva.ru/o-zdorovie/vrach-raskryl-glavnye-sekrety-vechnoj-molodosti'
      },
      {
        heading: 'Весенняя хандра: 8 неочевидных причин',
        decription: 'О причинах сезонных колебаний настроения и способах их нейтрализовать',
        imgIndex: 2,
        href: 'https://lisa.ru/zdorovye/681412-vesennyaya-handra-8-neochevidnyh-prichin/'
      },
      {
        heading: 'Сексуальное здоровье',
        decription: 'О том, как продлить сексуальное здоровье и на что обратить внимание',
        imgIndex: 6,
        href: 'https://yogajournal.ru/body/practice/health/seksualnoe-zdorove_459/'
      },
      {
        heading: 'Невыносимая легкость',
        decription: 'О причинах преждевременного окончания беременности',
        imgIndex: 7,
        href: 'https://www.7ya.ru/article/Nevynosimaya-legkost/'
      },
      {
        heading: 'Вумфитнес: блажь или необходимость? Эксперт о способах прокачать сексуальность',
        decription: 'О том, как тренировка интимных мышц помогает сохранить молодость, улучшить самочувствие и сексуальную жизнь',
        imgIndex: 8,
        href: 'https://www.thevoicemag.ru/health/your_health/vumfitnes-blazh-ili-neobhodimost-ekpert-o-sposobah-prokachat-seksualnost/'
      },
      {
        heading: 'Нестыдный вопрос: можно ли делать глубокое бикини беременным?',
        decription: 'Разрушение мифов об интимной эпиляции во время беременности',
        imgIndex: 9,
        href: 'https://flacon-magazine.com/lyudi/intervyu/5964280-nestydnyj-vopros-mozno-li-delat-glubokoe-bikini-beremennym'
      },
      {
        heading: 'Нестыдный вопрос: можно ли плавать во время месячных?',
        decription: 'О том, когда стоит и не стоит плавать во время менструации',
        imgIndex: 9,
        href: 'https://flacon-magazine.com/zdorovye/organizm/9035461-nestydnyj-vopros-mozno-li-plavat-vo-vrema-mesacnyh'
      },
      {
        heading: '«Можно ли забеременеть при климаксе?» и еще 5 неудобных вопросов врачу',
        decription: 'Разбираемся в физиологии процессов женского организма',
        imgIndex: 10,
        href: 'https://materinstvo.ru/art/23393'
      },
      {
        heading: 'Киста во влагалище: почему возникает, каких видов бывает, как лечить',
        decription: 'Разбираемся в физиологии процессов женского организма',
        imgIndex: 11,
        href: 'https://www.kiz.ru/content/zdorove/zhenskoe-zdorove/kista-vo-vlagalishche-pochemu-voznikaet-kakikh-vidov-byvaet-kak-lechit/'
      },
      {
        heading: 'Что могут сказать прыщи на лице? Врач объяснил взаимосвязь акне и внутренних органов',
        decription: 'Все про акне и способах избавления от него',
        imgIndex: 12,
        href: 'https://womfire.com/krasota/chto-mogut-skazat-pryshhi-na-lice-vrach-objasnil-vzaimosvjaz-akne-i-vnutrennih-organov/'
      },
      {
        heading: 'БАДы вызывают привыкание, способствуют красивому загару и многое другое — что из этого правда, а что нет',
        decription: 'Развеиваем мифы вокруг БАДов',
        imgIndex: 13,
        href: 'https://umagazine.ru/krasota/health/bady-vyzyvayut-privykanie-sposobstvuyut-krasivomu-zagaru-i-mnogoe-drugoe-chto-iz-etogo-pravda-a-chto/'
      },
      {
        heading: 'Как первый секс у девушек связан с риском инфицирования ВИЧ?',
        decription: 'О взаимосвязи ранней половой жизни и ВИЧ',
        imgIndex: 14,
        href: 'https://spid.center/ru/articles/4838'
      },
      {
        heading: 'Остановка в пути: в каких случаях нужна стимуляция родов',
        decription: 'О механизме и способах стимуляции родового процесса, а также о том, когда вмешательства оправданы',
        imgIndex: 15,
        href: 'https://www.parents.ru/article/ostanovka-vputi/'
      },
      {
        heading: 'Аптечка беременяшки',
        decription: 'О том, какие лекарства безопасны для беременных и что необходимо держать в аптечке, находясь в положении',
        imgIndex: 16,
        href: 'https://mamapills.ru/articles/4/'
      },
      {
        heading: 'После 40 секс только начинается: что такое сексуальное здоровье и 10 неочевидных факторов, которые на него влияют',
        decription: '',
        imgIndex: 17,
        href: 'https://www.novochag.ru/health/zdorovye/posle-40-seks-tolko-nachinaetsya-chto-takoe-seksualnoe-zdorove-i-10-neochevidnyh-faktorov-kotorye-na-nego-vliyayut/'
      }
    ]
  }),
  getters: {
    geDataCardMedia() {
      if (!this.isFullShow) {
        return this.dataCardMedia.filter((el, i) => i < 4)
      } else {
        return this.dataCardMedia
      }

    }
  },
  actions: {
    setIsFullShow() {
      this.isFullShow = !this.isFullShow
    }
  }
})