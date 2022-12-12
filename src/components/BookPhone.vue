<template>
  <div class="wrapper-book">
    <div class="title">Book professionals from your phone</div>
    <div class="descr">Enter your mobile number to get the professionals help</div>

    <div class="input-wrapper">
        <b-form-input class="phone-input"  placeholder="+13" />
    </div>

  </div>
</template>

<script>
export default {
  name: 'BookPhone',
}
</script>


<style scoped>
.wrapper-book {
  width: 100%;
  min-height: 437px;
  background-color: #FFF5DA;
  margin-top: 160px;
  padding: 127px 0 0 164px;
}
.title {
  font-family: 'Nunito';
  font-weight: 600;
  font-size: 36px;
  line-height: 49px;
  color: #323232;
}
.descr {
  font-family: 'Nunito';
  font-weight: 400;
  font-size: 29px;
  line-height: 40px;
  color: #646464;
  margin-bottom: 7px;
}
input.phone-input {
  height: 78px;
  padding: 27px 200px 27px 74px;
  font-family: 'Nunito';
  font-weight: 400;
  font-size: 29px;
  line-height: 40px;
  color: #000000;
  border-radius: 0 !important;
}
input.phone-input:focus {
  box-shadow: none;
}
.input-wrapper {
  width: 63%;
  position: relative;
}
</style>