<template>
  <div class="reviews-block">
    <h3 class="reviews-block__title">
      Мы уже помогли многим женщинам
    </h3>
    <elements-custom-select
      class="reviews-block__select"
      label="Отзывы Школа беременных"
      :items="optionsArray"
      @updateFilters="update"
    />
    <div>
      <swiper
        :breakpoints="{
      1281: {
        slidesPerView: 2,       
        spaceBetween: 40
      },
      500: {
        slidesPerView: 1,       
        spaceBetween: 20
      },
      0: {
        slidesPerView: 2,       
        spaceBetween: 20
      },

    }"
        class="slider"
      >
       <swiper-slide v-for="item in optionsArray" class="itemSlider">
        <p>        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam maxime, impedit autem consequatur perspiciatis iure amet quos temporibus delectus doloremque obcaecati quo explicabo voluptatibus laborum aut libero quas possimus, minima deleniti expedita asperiores nesciunt consequuntur voluptatum. Quasi inventore earum nemo dolor aliquid nisi nihil eos exercitationem dolore dicta ad quia, quae accusamus ipsam ut possimus maxime vitae consectetur? Provident, ut beatae sint debitis incidunt nulla tempora iusto eligendi? Optio, laborum quibusdam quisquam consequuntur fugiat voluptates nulla, harum explicabo nemo nesciunt et eius odio aspernatur error exercitationem perferendis modi minus. Veritatis nam quis repudiandae eligendi deleniti dicta, cum corporis pariatur numquam ratione mollitia dolor, suscipit cupiditate. Dolores qui dicta sapiente, odio ad dolorum ipsa magni quo! Tempora, ratione numquam recusandae, incidunt sunt officia facere et, saepe corrupti perspiciatis aliquam accusamus reiciendis vitae quam iure aspernatur error doloribus quo animi voluptate temporibus! Hic sapiente optio cum eius dolorum laboriosam commodi doloremque ipsa, ullam corrupti. Pariatur vel ea totam consectetur inventore? Beatae atque quibusdam sint. Iste eius voluptates unde aperiam sunt natus totam ut, ipsam nobis! Dolor, sapiente aliquam. Quisquam delectus fugit, minus doloribus et porro placeat corrupti voluptatum laboriosam, quaerat sapiente doloremque architecto aspernatur! Consequatur vero iusto quasi, accusantium aperiam eum veniam corporis magnam voluptatum possimus unde minus harum dicta, neque quisquam autem ipsum quo numquam, facere perferendis est! Ducimus quod tempore est repellendus. Harum molestias praesentium nisi? Hic illo fuga dolorum illum officiis in deserunt maxime ullam deleniti perferendis! Illum incidunt quas nesciunt vel consectetur. Nulla natus distinctio nisi, nostrum molestiae dicta, placeat at voluptatum reprehenderit excepturi commodi ipsa temporibus, eveniet voluptate! Vero necessitatibus numquam animi labore, atque reiciendis illo. Ullam vitae dolorem eum, molestias ab obcaecati minima neque? Cumque praesentium ratione earum quos officiis porro placeat. Facilis nulla reprehenderit magni quo praesentium fuga ratione iure itaque quis odit cupiditate, qui minima labore! Error laborum vero, omnis nemo recusandae quis rem nobis iste, dolores, modi maxime quasi adipisci debitis. Natus, eligendi eum. Vitae, atque debitis. Quis sed nemo quasi ipsam accusantium qui deleniti unde voluptate aperiam voluptatem, corrupti eveniet earum, doloribus at? Placeat similique, error veniam id nihil repellendus? Dolore, aliquam consequatur fugit accusantium ducimus at laborum inventore? Rerum vero laudantium nihil obcaecati ipsam error! Cum, rem explicabo. Nemo ratione, modi sequi reiciendis libero exercitationem. Et sit neque veniam tempore amet aliquid cupiditate placeat incidunt ex nemo culpa eligendi, dolorem soluta perferendis. Perferendis tempora, cupiditate obcaecati temporibus quaerat sapiente ad veritatis molestias fuga recusandae magni fugiat atque unde sed rerum! Vitae ad minima debitis autem sequi quam corporis at, eos dolor laudantium vero reiciendis modi quibusdam aperiam, quasi labore nesciunt nam quaerat repellat officia! Omnis, placeat recusandae. Explicabo commodi sunt ipsum nobis! Corrupti, totam! Iure sapiente, cumque earum quod, eos officia quaerat corrupti eaque facere soluta vero enim, sequi provident omnis non nostrum! Excepturi assumenda perspiciatis, nobis amet rem sunt, ea odit sit aperiam unde quia vel. Quam quo ut sit. Adipisci atque expedita facilis! Dolorem aperiam aliquam deleniti aliquid eveniet harum at, consequuntur ex nam, et accusamus beatae eaque architecto in tempore quos voluptates adipisci. Ullam maxime dolor architecto doloremque consectetur laboriosam temporibus mollitia ratione culpa deserunt nihil eius sunt, debitis, exercitationem possimus amet sapiente. Debitis accusantium beatae amet facere ipsam sequi ullam aut molestiae doloremque, ratione numquam ab porro excepturi rerum, magnam ducimus aspernatur corrupti autem rem temporibus cumque. Quis, dolor. Maxime quis accusantium ex ut. Fugit voluptatem provident, placeat quaerat minima odio, harum mollitia explicabo pariatur soluta repellendus. Cum, voluptas earum magnam dolores consectetur a nobis. Facere quaerat delectus reiciendis rem consequatur, eveniet incidunt beatae. Cum provident fugit possimus vel nobis mollitia soluta error quam perspiciatis tempore, ad ab id vero doloribus expedita delectus enim, odio harum quidem illo eos assumenda quibusdam maxime sint? Harum porro excepturi libero dolorem cumque non veritatis magnam dolore similique illum nulla temporibus odio cupiditate adipisci, labore ipsum, perferendis eum dolores earum consequatur, beatae necessitatibus! Eveniet mollitia optio tempore sint dolorem dolores cupiditate perspiciatis quas aperiam, itaque, laboriosam nihil rerum impedit, est inventore laborum! Aliquid facilis porro labore, suscipit praesentium esse saepe deserunt, totam, corrupti odio accusantium iste debitis placeat ducimus libero sit quae rerum numquam ad eos sunt accusamus atque sapiente tenetur. Dignissimos aperiam a reprehenderit dolorem sequi quia delectus neque natus, molestiae earum recusandae consequuntur nobis ullam optio. Possimus quisquam provident aperiam recusandae deleniti, corrupti dolore nulla voluptatum labore tenetur id minus inventore ratione hic vitae a iusto eos assumenda. Libero consequuntur expedita placeat necessitatibus? Ex nulla quibusdam non quasi molestiae consectetur aperiam nostrum sunt, in consequuntur sed deleniti, nemo ullam iusto! Obcaecati, cupiditate dolorum suscipit similique cum tenetur ullam soluta! Facilis corporis qui, suscipit reprehenderit ipsam maxime iste mollitia nemo cum molestias odit ducimus repudiandae explicabo laudantium velit quibusdam totam tempora. Accusantium, beatae? Libero doloribus est esse, reiciendis laborum ipsum officiis nam sapiente eveniet ab quas odit ipsa! Praesentium excepturi rem ipsum vel reprehenderit quidem sequi natus aut dolores magnam eligendi ab delectus deserunt quae velit, voluptas assumenda maiores vero nisi architecto animi est numquam itaque alias. Nostrum placeat in dolor laudantium reiciendis, possimus eos iste nam harum delectus eius, aut eveniet asperiores quam praesentium officiis maxime quibusdam alias repellat vitae deserunt fugit atque? Tempore vero earum eos dolore, accusantium voluptas quae alias temporibus explicabo rerum magni laudantium recusandae, totam ea neque! Eveniet dicta inventore at beatae provident, atque quis ipsum numquam aperiam similique fuga explicabo nulla minus tempora sed ad. Provident soluta quasi laboriosam quo voluptas nam sunt, numquam molestias ipsam! Obcaecati necessitatibus nihil repellendus aperiam saepe, modi illo quam consequatur reiciendis praesentium sequi voluptate enim dicta numquam ea nisi dolorum? Voluptatum adipisci nobis eveniet repellat obcaecati eius doloribus voluptate error alias? Expedita vel animi ducimus illum praesentium omnis necessitatibus perspiciatis voluptate repudiandae minima? Repudiandae at placeat amet quis dolorem ipsum nemo nisi tempore accusantium officia, nostrum, quo, voluptas porro voluptatum aliquam hic autem cum modi cupiditate! Labore blanditiis voluptatibus quis amet quidem perferendis magnam quibusdam cumque, at optio, cum obcaecati impedit recusandae eos tempora officiis fugit vel rerum numquam! Nostrum quas, officia eveniet nulla est ut minus recusandae!
        </p>        
        <div class="details">
          <div></div>
          <div></div>
          <div></div>
        </div>
       </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

const optionsArray = [
  {
    key: 'repro',
    label: 'Проект «Репро»'
  },
  {
    key: 'meno',
    label: 'Проект «Мено»'
  },
  {
    key: 'consumptionGuide',
    label: 'Гайд по питанию'
  },
  {
    key: 'webinars',
    label: 'Вебинары по подготовке'
  },
  {
    key: 'webinarsAnalise',
    label: 'Вебинар «Анализы и обследования во время беременности»'
  },
  {
    key: 'authorsProgram',
    label: 'Авторская программа восстановления после беременности'
  },
  {
    key: 'venera',
    label: 'Проект «Рождение Венеры»'
  }
]

  export default {
    components: {
      Swiper,
      SwiperSlide
    },

    setup () {

      function update (value) {
        console.log(value)
      }

      return {
        optionsArray,
        update
      }
    }
  }
</script>

<style lang="scss" scoped>


.slider {
  overflow: visible;
  margin-top: 40px;
}
.itemSlider {
  max-width: 560px;
  padding: 40px 40px 0px 40px;
  width: 100%!important;
  background: #ECE7E1;
  overflow: hidden;
  height: 354px;
  border-radius: 15px;
  position: relative;

  .details {
    display: flex;
    gap: 3px;
    position: absolute;
    bottom: 20px;
    z-index: 1;
    position: absolute;
    cursor: pointer;
    left: 50%;
    transform: translate(-50%, -50%);
    div {
      width: 5px;
      height: 5px;
      background: #644C5C;
      border-radius: 50%;
    }
  }

  p {
    margin: 0;
    color: #232323;
    line-height: 24px;
  }

  &::before {
    content: "";
    height: 30px;
    width: 100%;
    height: 70px;
    background: rgba(236, 231, 225, .3);
    position: absolute;
    bottom: 0px;
    left: 0;

    -webkit-box-shadow: 0px -98px 41px -17px rgba(236, 231, 225, .9) inset;
-moz-box-shadow: 0px -98px 41px -17px rgba(236, 231, 225, .9) inset;
box-shadow: 0px -98px 41px -17px rgba(236, 231, 225, .9) inset;

  }

  &::after {
    content: "";
    height: 30px;
    width: 100%;
    height: 30px;
    background: rgba(236, 231, 225, 1);
    position: absolute;
    bottom: 0px;
    left: 0;

  }



}
  .reviews-block {
    margin: 150px 0 0 0;
    width: 100%;

    &__title {
      color: #644C5C;
      font-size: 38px;
      margin: 0;
      text-align: left;
    }

    &__select {
      width: 410px;
      margin: 40px 0 0 0;
    }
  }
</style>