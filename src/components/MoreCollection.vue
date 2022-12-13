<template>
  <div>
    <div class="title">More ideas and inspiration</div>
    <div class="d-flex wrapper__collection justify-content-between">

      <div class="wrapper__descr">
        <p>Housesale chose to work together with the Lebanese designer Nada Debs. We are thrilled to present this
          collaboration and the LJUV collection, and we hope that you can see, feel, use the connection between a
          designer from the Middle East democratic design.<br><br>

          Nada Debs is a Levantine designer living and working in Beirut. Her work spans scale and discipline: from
          product to furniture design to one-off commission across craft, art, fashion, and interiors. Nada grew up in
          Japan, studied design in Rhode Island School of Design in the US, and has spent significant periods living and
          traveling the world, finding connections of each of her experiences in all her work. She calls her approach
          handmade, and heart-made!</p>
        <div class="position-relative d-flex align-items-srart">
          <ButtonMain text="more collection" alignment="left: 0" />
        </div>
      </div>

      <div class="wrapper__img_collection d-flex justify-content-between">
        <img :src="require(`@/assets/${collectionHouses.home_1}.png`)" alt="photo">
        <img :src="require(`@/assets/${collectionHouses.home_2}.png`)" alt="photo">
        <img :src="require(`@/assets/${collectionHouses.home_3}.png`)" alt="photo">
      </div>

    </div>
  </div>
</template>

<script>
import ButtonMain from '@/components/ButtonMain.vue'
export default {
  name: 'MoreCollection',
  components: {
    ButtonMain,
  },
  data() {
    return {
      collectionHouses: {
        home_1: 'corner-house',
        home_2: 'inSideHouse-1',
        home_3: 'inSideHouse-2',
      }
    }
  }
}
</script>

<style scoped>
.title {
  margin-top: 110px;
  margin-bottom: 21px;
  font-family: 'Nunito';
  font-weight: 600;
  font-size: 36px;
  line-height: 49px;
  color: #323232;
}

.wrapper__descr {
  margin-top: 20px;
  margin-bottom: 0;
  width: calc(50% - 25px);
  margin-bottom: 29px;
  font-family: 'Nunito';
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #606060;
}

.wrapper__img_collection {
  width: calc(50% - 27px);
}

.wrapper__img_collection img {
  width: calc(33% - 8px);
  height: 441px;

}
</style>