<template>
  <div class="wrapper-img position-relative">
    <img :src="require(`@/assets/${catalog.img}.png`)" alt="photo">
    <div class="descr">{{catalog.text}}</div>
  </div>
</template>

<script>
export default {
neme: 'SectionHouses',
props: {
  catalog: {
    type: Object,
    required: true,
  },
},

}
</script>

<style scoped>
.wrapper-img {
  width: 293px;
  height: 406;
  margin-right: 24px;
  margin-bottom: 24px;
}
.wrapper-img:hover .descr {
  display: flex;
  align-items: center;
  justify-content: center;

}
.descr {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  display: none;
  color: #fff;

}
</style>