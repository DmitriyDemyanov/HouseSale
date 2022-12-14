<template>
  <div class="wrapper-footer">
    <BContainer>
      <div class="d-flex justify-content-between">
        <FooterHeader :info="item" v-for="(item, index) in getFooterLink" :key="index" />
      </div>
      <div class="footer-bar"></div>
      <div class="title">Serving in</div>
      <CountryServise :place="country" v-for="(country, index) in getCityServese" :key="index" />
      <div class="footer-bar down"></div>
      <div class="d-flex align-items-center justify-content-between wrapper-link">
        <a href="#"><img src="@/assets/houseSele.svg" alt="logo"></a>
        <a target="_blank" href="#">© 2020 Housesale Technologies Ltd.</a>
        <a target="_blank" href="#">1760 Dancing Dove Lane, New York, USA</a>
        <a target="_blank" href="#">sales@housesales.com</a>
        <a target="_blank" href="http://play.google.com">
          <img src="@/assets/googlePlay.svg" alt="play">
        </a>
        <a target="_blank" href="http://apple.com">
          <img src="@/assets/appleStore.svg" alt="app">
        </a>
      </div>
    </BContainer>
  </div>
</template>

<script>

import FooterHeader from "@/components/FooterHeader";
import CountryServise from '@/components/CountryServise';

import { mapGetters } from "vuex";
export default {
  name: "FooterSection",
  components: {
    FooterHeader,
    CountryServise,
  },
  computed: {
    ...mapGetters("footer", ["getFooterLink", 'getCityServese']),

  },
};
</script>

<style scoped>
.wrapper-footer {
  width: 100%;
  min-height: 758px;
  background-color: #093a7a;
  padding: 45px 0 0 100px;
}

.footer-bar {
  margin-top: 20px;
  margin-bottom: 28px;
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.16);
}

.down {
  margin-top: 40px;
}

.title {
  font-family: 'Nunito';
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #FFFFFF;
}

.wrapper-link a {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #CACACA;
}
</style>
