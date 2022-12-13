<template>
  <button :style="`${alignment}`" class="button-main">
    {{text}}
  </button>
</template>

<script>
export default {
name: 'ButtonMain',
props: {
  text: {
    type: String,
    required: true,
  },
  alignment: {
    type: String,
    default: 'right:0'
  }

}
}
</script>

<style scoped>
.button-main {
  position: absolute;
  top:0;
  background-color: #FFC839;
  padding: 11px 40px;
  margin: 8px 12px 8px 0;
  font-family: 'Nunito';
  font-weight: 400;
  font-size: 29px;
  line-height: 40px;
  color: #000000;
  text-transform: capitalize;
  border: none;
}
</style>