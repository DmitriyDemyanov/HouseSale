<template>
  <div>
    <HeaderNavigation />
    <router-view class="main-view"></router-view>
  </div>
</template>

<script>
import HeaderNavigation from '@/components/HeaderNavigation';
export default {
  name: 'App',
  components: {
    HeaderNavigation
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Poppins:wght@500;600;700;900&display=swap');

html, body {
  font-family: 'Nunito', sans-serif;
}

#app {
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
