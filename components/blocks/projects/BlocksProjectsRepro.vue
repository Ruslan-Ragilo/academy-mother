<template>
  <div class="project-block">
    <div class="project-block__about">
      <h2 class="project-block__about-title">
        Персонализированный проект «Репро — оживи ячники»
      </h2>
      <div class="project-block__about-text">
        Для тех, кто столкнулся со снижением овариального резерва и/или симптомами пременопаузы в процессе планирования беременности
      </div>
      <div class="project-block__about-additional">
        <svg-soft-icon class="project-block__about-additional-background" />
        <div class="project-block__about-additional-text">
          Место проживания не является ограничением для участия
        </div>
      </div>
      <svg-heart-icon class="project-block__about-heart-icon" />
      <svg-pine-icon class="project-block__about-pine-icon" />
    </div>
    <div class="project-block__when-needed-block">
      <h2 class="project-block__block-title">
        Когда стоит идти
      </h2>
      <div class="project-block__when-needed-list">
        <elements-iconed-item
          v-for="item in tabsList"
          :icon-name="item.icon"
          :icon-color="item.color"
          :text="item.text"
        />
      </div>
    </div>
    <div class="project-block__what-inside-block">
      <h2 class="project-block__block-title">
        Что внутри?
      </h2>
      <div class="project-block__what-inside-list">
        <div class="project-block__what-inside-item">
          <div class="project-block__what-inside-title">
            Отдельный Telegram-чат
          </div>
          <div class="project-block__what-inside-text">
            В течение 4-х недель в закрытом Telegram-канале будут выходить актуальные стратегические посты,
            объясняющие всю тактику и возможности активации яичников
          </div>
          <svg-union class="project-block__what-inside-item-union" />
        </div>
        <div class="project-block__what-inside-item">
          <div class="project-block__what-inside-title">
            Персонализация
          </div>
          <div class="project-block__what-inside-text">
            За время проекта вам необходимо будет сдать анализы и заполнить анкету. В течение 2-х недель после окончания
            проекта каждая участница получит персональный протокол от доктора медицинских наук профессора акушера-гинеколога
            Джобава Элисо Мурмановны. После его получения вы сможете 1 раз задать все интересующие вас вопросы по протоколу в ответном письме
          </div>
        </div>
      </div>
    </div>
    <div class="project-block__required-block">
      <h2 class="project-block__block-title">
        Какие анализы и обследования понадобятся?
      </h2>
      <div class="project-block__required-collapse-wrapper">
        <elements-collapse class="project-block__required-collapse" title="Минимум">
          <ul class="project-block__required-list two-columns">
            <li>— АМГ — антимюллеров гормон</li>
            <li>— ФСГ — фолликулостимулирующий гормон</li>
            <li>— ЛГ — лютеинизирующий гормон на 3−5 день цикла</li>
            <li>— УЗИ малого таза с подсчетом числа антральных фолликулов в каждом яичнике на 5−7 день цикла</li>
            <li>— Клинический анализ крови</li>
            <li>— Общий анализ мочи</li>
            <li>— ТТГ — тиреотропный гормон</li>
            <li>— Пролактин</li>
            <li>— Ферритин</li>
            <li>— Трансферин</li>
            <li>— Сывороточное железо</li>
            <li>— Витамин Д25он</li>
            <li>— Гомоцистеин</li>
            <li>— Лактат</li>
            <li>— ГГТ — гамма-глутамин-транспептидаза</li>
            <li>— Общий белок</li>
            <li>— Гликированный гемоглобин</li>
            <li>— Мочевая кислота</li>
            <li>— Эозинофильный катионный белок</li>
            <li>— Иммуноглобулин Е</li>
            <li>— Общий холестерин</li>
            <li>— ЛПНП-липропротеиды низкой плотности</li>
            <li>— С реактивный белок</li>
            <li>— Д-димер</li>
          </ul>
        </elements-collapse>
        <elements-collapse class="project-block__required-collapse" title="Оптимум">
          <div class="project-block__required-collapse_subtitle">
            Все анализы Минимума, плюс:
          </div>
          <ul class="project-block__required-list two-columns">
            <li>— Т3 свободный</li>
            <li>— Т4 свободный</li>
            <li>— АТ-ТПО — антитела к тиреопероксидазе</li>
            <li>— АТ-ТГ — антитела к тиреоглобулину</li>
            <li>— Глюкоза крови</li>
            <li>— Онкомаркер СА-125</li>
            <li>— Окномаркер НЕ-4</li>
            <li>— АЛТ — аланинаминотрансфераза</li>
            <li>— АСТ — аспартатаминотрансфераза</li>
            <li>— ЩФ — щелочная фосфатаза</li>
            <li>— ЛПВП — липопротеиды высокой плотности</li>
            <li>— Мочевина</li>
            <li>— Креатинин</li>
            <li>— АЧТВ — активированное частичное тромбопластиновое время</li>
            <li>— Фибриноген</li>
            <li>— АСЛО — антистрептолизин-О</li>
            <li> — РФ — ревматоидный фактор</li>
            <li>— Кальпротектин</li>
            <li> — Копрограмма</li>
          </ul>
        </elements-collapse>
        <elements-collapse class="project-block__required-collapse" title="Максимум">
          <ul class="project-block__required-list two-columns">
            <div class="project-block__required-collapse_subtitle">
              Все анализы Оптимума плюс:
            </div>
            <li>— Тест эливисцеро-24</li>
          </ul>
        </elements-collapse>
      </div>
    </div>
    <div class="project-block__additional-block">
      <div class="project-block__additional-left-column">
        <img class="project-block__additional-avatar" src="@/assets/images/ConsultationsPageDescPhoto.png" />
        <h3 class="project-block__additional-left-text">
          Если вы уже приняли решение об ЭКО — наиболее эффективно будет войти в протокол в течение 2-6 месяцев после проекта
        </h3>
      </div>
      <div class="project-block__additional-right-column">
        <h3 class="project-block__additional-right-title">
          Старт третьего потока — январь 2023
        </h3>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSemeWdP_plcFlkOOFZ2NL5hMcyMMN9bWW2pc4OZkgZcLow8pA/viewform?usp=sharing"
          class="project-block__additional-button-container"
        >
          <elements-buttons-secondary title="Записаться в лист ожидания" />
        </a>
        <svg-almost-circle class="project-block__additional-almost-circle"/>
      </div>
    </div>
  </div>
</template>

<script>
const tabsList = [
  {
    icon: 'heartIcon',
    color: '#78353E',
    text: 'Вы планируете беременность вообще или в ближайшее время'
  },
  {
    icon: 'SvgDiamondIcon',
    color: '#C99D7A',
    text: 'У вас снижение овариального резерва (причина не имеет значения) и/или признаки ранней или преждевременной менопаузы (до 45-ти лет)'
  },
  {
    icon: 'almostCircle',
    color: '#78353E',
    text: 'Вам не более 43 лет. Участие в проекте женщин 44-45 лет возможно при условии, что вы понимаете высокую вероятность низкой эффективности протокола'
  },
  {
    icon: 'SvgGex',
    color: '#644C5C',
    text: 'Вы старше 45-ти лет, но понимаете, что своих яйцеклеток получить практически невозможно'
  },
  {
    icon: 'SvgSoftIcon',
    color: '#064848',
    text: 'Вы рассматриваете вероятность применения метода ЭКО и готовы к криоконсервации яйцеклеток, если в настоящий момент нет потенциального отца ребенка'
  }
]

export default {
  setup () {

    return {
      tabsList
    }
  }
}
</script>

<style lang="scss" scoped>
  .project-block {
    margin: 60px 0 0 0;
    width: 100%;

    &__about {
      position: relative;
      padding: 80px 0;
      background: #C5B1B2;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      @media screen and (max-width: 1200px) {
        padding: 60px 0 150px 0;
      }
    }

    &__about-title {
      color: #FEF8F2;
      font-size: 38px;
      max-width: 500px;

      @media screen and (max-width: 1200px) {
        font-size: 36px;
      }

      @media screen and (max-width: 680px) {
        font-size: 30px;
      }
    }

    &__about-text {
      font-size: 16px;
      line-height: 24px;
      max-width: 500px;
      color: #FEF8F2;
    }

    &__about-additional {
      position: absolute;
      bottom: 30px;
      left: -50px;
      width: 210px;
      height: 210px;
      display: flex;
      align-items: center;

      @media screen and (max-width: 1200px) {
        bottom: -100px;
        left: calc(50% - 105px);
      }
    }

    &__about-additional-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      fill: #644C5C;
    }

    &__about-additional-text {
      padding: 0 20px;
      position: relative;
      font-size: 14px;
      line-height: 21px;
      color: #FEF8F2;
      z-index: 2;
      text-align: center;
    }

    &__about-heart-icon {
      position: absolute;
      fill: #C99D7A;
      transform: rotate(50deg) scale(0.8);
      bottom: -20px;
      right: 70px;

      @media screen and (max-width: 1200px) {
        bottom: 40px;
        right: -40px;
      }

      @media screen and (max-width: 680px) {
        display: none;
      }
    }

    &__about-pine-icon {
      position: absolute;
      fill: #064848;
      transform: rotate(-60deg);
      bottom: -40px;
      right: 160px;

      @media screen and (max-width: 1200px) {
        display: none;
      }
    }

    &__when-needed-block {
      margin: 120px 0 0 0;
    }

    &__when-needed-list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 40px;
      margin: 40px 0 0 0;

      @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
      }

      @media screen and (max-width: 680px) {
        grid-template-columns: 1fr;
      }
    }

    &__block-title {
      color: #644C5C;
      font-size: 38px;
      line-height: 130%;
      margin: 0;

      @media screen and (max-width: 1200px) {
        font-size: 36px;
      }

      @media screen and (max-width: 680px) {
        font-size: 28px;
      }
    }

    &__what-inside-block {
      margin: 120px 0 0 0;

      @media screen and (max-width: 680px) {
        margin: 70px 0 0 0;
      }
    }

    &__what-inside-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px;
      margin: 50px 0 0 0;

      @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
      }
    }

    &__what-inside-item {
      position: relative;
      background: #ECE7E1;
      border-radius: 15px;
      padding: 40px;
    }

    &__what-inside-title {
      font-weight: 700;
      font-size: 22px;
      line-height: 28px;
      color: #78353E;
      margin: 0 0 15px 0;
    }

    &__what-inside-text {
      color: #232323;
      font-size: 16px;
      line-height: 24px;
    }

    &__what-inside-item-union {
      position: absolute;
      fill: #C99D7A;
      transform: scale(2);
      bottom: -40px;
      right: 90px;

      @media screen and (max-width: 1200px) {
        bottom: unset;
        top: -40px;
      }

      @media screen and (max-width: 680px) {
        display: none;
      }
    }

    &__required-block {
      margin: 120px 0 0 0;
    }

    &__required-collapse-wrapper {
      margin: 50px 0 0 0;
    }

    &__required-collapse {

      &:not(:last-child) {
        margin: 0 0 20px 0;
      }
    }

    &__required-list {
      list-style: none;
      padding: 0;
      margin: 0;
      color: #232323;
      font-size: 16px;
      max-width: 70%;

      @media screen and (max-width: 1200px) {
        max-width: 100%;
      }

      li {
        &:not(:last-child) {
          margin: 0 0 5px 0;
        }
      }
    }

    &__required-collapse_subtitle {
      color:#232323;
      font-weight: 600;
      font-size: 14px;
      margin: 0 0 10px 0;
    }

    &__additional-block {
      margin: 90px 0 0 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      @media screen and (max-width: 1200px) {
        flex-direction: column;
      }
    }

    &__additional-left-column,
    &__additional-right-column {
      width: calc((100% - 120px)/2);
      @media screen and (max-width: 1200px) {
        width: 100%;
      }
    }

    &__additional-avatar {
      width: 90px;
      height: 90px;
    }

    &__additional-left-text {
      color: #644C5C;
      font-size: 32px;
      line-height: 130%;
      margin: 30px 0 0 0;

      @media screen and (max-width: 1200px) {
        font-size: 30px;
      }
    }

    &__additional-right-column {
      position: relative;
      background-color: #064848;
      border-radius: 15px;
      padding: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media screen and (max-width: 1200px) {
        margin: 30px 0 0 0;
        align-items: center;
      }
    }

    &__additional-right-title {
      color: #FEF8F2;
      font-size: 26px;
      line-height: 34px;
      max-width: 70%;
      margin: 0;

      @media screen and (max-width: 1200px) {
        max-width: 100%;
      }
    }

    &__additional-button-container {
      display: flex;
      text-decoration: none;
    }

    &__additional-almost-circle {
      position: absolute;
      top: 0;
      right: 0;
      fill: #839389;
      transform: scale(1.5) rotate(40deg);

      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
  }
</style>
