<template>
  <div class="section-container">
    <blocks-school-intro />
    <blocks-school-navigation />
  </div>
  <div class="background-violet">
    <div class="section-container">
      <blocks-school-video />
    </div>
  </div>
  <div class="section-container">
    <blocks-school-program id="schoolProgram" class="section-block" />
    <blocks-school-tariff id="schoolTariff" class="section-block" />
    <blocks-school-perks class="section-block" />
    <div style="width: 100%;" id="schoolExperts">
      <blocks-main-swiper headingSlider="Эксперты Школы беременности" />
    </div>
    <blocks-school-questions class="section-block" />
  </div>
</template>
