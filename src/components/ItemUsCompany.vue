<template>
  <div class="d-flex align-items-center item-company">
    <div class="company-icon">
      <img :src="require(`@/assets/${UsCompany.img}.svg`)" alt="icon">
    </div>
    <div>
      <div class="title">{{ UsCompany.title }}</div>
      <div class="descr">{{ UsCompany.descr }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemUsCompany',
  props: {
    UsCompany: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.title {
  font-family: 'Nunito';
  font-weight: 400;
  font-size: 29px;
  line-height: 40px;
  color: #4A4A4A;
  margin-bottom: 20px;
}
.descr {
  font-family: 'Nunito';
  font-weight: 400;
  font-size: 21px;
  line-height: 29px;
  color: #4A4A4A;
}
.item-company {
  margin-bottom: 52px;
}
.company-icon {
  margin-right: 32px;
}
</style>