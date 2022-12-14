<template>
  <div>
    <div class="country">{{ place.name }}</div>
    <span class="cities" v-for="(item, index) in place.cities" :key="index">{{item.city}}</span>
  </div>
</template>

<script>
export default {
  name: 'CountryServise',
  props: {
    place: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.country {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #E6E5E5;
  margin-top: 23px;
  margin-bottom: 10px;
}
.cities {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #CACACA;
  margin-right: 30px;
  }
</style>