<template>
  <div class="wrapper-card">
    <div class="card-img">
      <img height="100%" :src="require(`@/assets/${infoHouse.img}.png`)" alt="photo">
    </div>
    <div class="card-title d-flex align-items-center">
      <div class="card-icon">
        <img src="@/assets/shevron.svg" alt="icon">
      </div>
      <div class="text">{{infoHouse.title}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InSideHouse',
  props: {
    infoHouse: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.wrapper-card {
  margin-top: 74px;
  margin-right: 22px;
  width: 400px;
  height: 547px;
}

.card-img {
  height: 80%;
}

.card-img img {
  width: 100%;
  object-fit: cover;
}

.card-title {
  height: 20%;
}

.card-icon {
  width: 38px;
  height: 38px;
  margin: 0 32px 0 50px;
}

.text {
  font-family: 'Nunito';
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
}
</style>