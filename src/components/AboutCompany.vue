<template>
  <div class="wrapper-company">
    <div class="bg-company"></div>
    <div class="company-photo"><img src="@/assets/houseCompany.png" alt="photo"></div>
    <div class="header-title">Why HOUSESALE Company?</div>
    <ItemUsCompany :UsCompany="item" v-for="(item, index) in getInfoCompany" :key="index"/>
  </div>
</template>

<script>
import ItemUsCompany from '@/components/ItemUsCompany';
import { mapGetters } from 'vuex';
export default {
  name: 'AboutCompany',
  components: {
    ItemUsCompany,
  },
  computed: {
    ...mapGetters('inSideHouse',['getInfoCompany'])
  }
}
</script>

<style scoped>
.header-title {
  font-family: 'Nunito';
  font-weight: 600;
  font-size: 36px;
  line-height: 49px;
  color: #323232;
  margin-top: 69px;
  margin-bottom: 65px;
}
.wrapper-company {
  position: relative;
  margin-top: 100px;
}
.company-photo {
  position: absolute;
  top: 0;
  right: 0;
}
.bg-company {
  position: absolute;
  top: 60px;
  right: 22px;
  background-color: #FFC839;
  width: 477px;
  height: 431px;
}
</style>