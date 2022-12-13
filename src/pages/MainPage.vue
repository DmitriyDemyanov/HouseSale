<template>
  <div>
    <div class="wrap-bg">
      <BContainer class="main-page__content">
        <div class="title">Quality home services, on<br> demand</div>
        <div class="descr">Experienced, hand-picked Professionals to serve you at your<br> doorstep</div>
        <ButtonBlock />
      </BContainer>
    </div>
    <BContainer>
      <div class="d-flex">
        <InSideHouse :infoHouse="info" v-for="(info, index) in getInteriorHouse" :key="index" />
      </div>
      <AboutCompany />
      <BookPhone />
      <div class="title-houses">More ideas and inspiration</div>
      <div class="d-flex flex-wrap">
        <SectionHouses :catalog="item" v-for="(item, index) in getCatalogHouses" :key="index"/>
      </div>
      <MoreCollection/>
      <div class="bar"></div>
      <FurnishingRange/>
    </BContainer>
    <FooterSection/>
  </div>
</template>

<script>
import ButtonBlock from '@/components/ButtonBlock';
import InSideHouse from '@/components/InSideHouse';
import AboutCompany from '@/components/AboutCompany';
import BookPhone from '@/components/BookPhone';
import SectionHouses from '@/components/SectionHouses';
import MoreCollection from '@/components/MoreCollection';
import FurnishingRange from '@/components/FurnishingRange';
import FooterSection from '@/components/FooterSection';

import { mapGetters } from 'vuex';
export default {
  name: 'MainPage',
  computed: {
    ...mapGetters('inSideHouse', ['getInteriorHouse']),
    ...mapGetters('catalogOfHouses', ['getCatalogHouses'])
  },
  components: {
    ButtonBlock,
    InSideHouse,
    AboutCompany,
    BookPhone,
    SectionHouses,
    MoreCollection,
    FurnishingRange,
    FooterSection,
  }
}
</script>

<style scoped>
.wrap-bg {
  background-image: url("@/assets/bgHeader.png");
  width: 100vw;
  min-height: 100vh;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  position: relative;
  padding-bottom: 72px;
}

.wrap-bg:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(0.87deg, rgba(2, 55, 135, 0.9) 0.69%, rgba(81, 38, 174, 0.4736) 100.48%, rgba(38, 92, 174, 0.0102906) 100.49%, rgba(195, 195, 196, 0.00520833) 100.5%, #76A6EF 100.51%);
}

.main-page__content {
  position: relative;
  z-index: 1;
}

.title {
  font-family: 'Nunito';
  font-weight: 700;
  font-size: 60px;
  line-height: 82px;
  color: #FFFFFF;
  padding-top: 240px;
  padding-bottom: 21px;
}

.descr {
  font-family: 'Nunito';
  font-weight: 400;
  font-size: 29px;
  line-height: 40px;
  color: #FFFFFF;
}
.title-houses {
  font-family: 'Nunito';
  font-weight: 600;
  font-size: 36px;
  line-height: 49px;
  color: #323232;
  margin-top: 122px;
  margin-bottom: 45px;
  }
  .bar {
    width: 100%;
    height: 2px;
    background-color: #D7D6D6;
    margin-top: 59px;
    margin-bottom: 49px;
  }
</style>