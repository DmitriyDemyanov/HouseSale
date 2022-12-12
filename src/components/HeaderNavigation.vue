<template>
  <div class="header__wrapper">
    <BContainer class="d-flex justify-content-between header__content">

      <div>
        <router-link to="/"><img src="@/assets/houseSele.svg" alt="logo"></router-link>
      </div>

      <div class="header-nav">
        <router-link to="/">On sale</router-link>
        <router-link to="/">For rent</router-link>
        <router-link to="/about">New Residential Project</router-link>
        <router-link to="/about">Property News</router-link>
      </div>
    </BContainer>
  </div>
</template>

<script>
export default {
  name: 'HeaderNavigation'
}
</script>

<style scoped>
.header__wrapper {
  margin-top: 42px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
}
.header__content {
  padding-right: 103px;
}

.header-nav a {
  margin-right: 42px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
}
</style>