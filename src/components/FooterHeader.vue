<template>
  <div class="wrapper-link">
    <a  target="_blank"  :href="`${info.link}`">{{info.text}}</a>
  </div>
</template>


<script>
export default {
  name: 'FooterHeader',
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
}

</script>

<style scoped>
.wrapper-link a {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #CACACA;
  text-decoration: none;
}
</style>