<template>
  <div class="wrapper-button">
    <button class="width-first">1</button>
    <button class="width-big">2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>Search</button>
  </div>
</template>

<script>
export default {
  name: 'ButtonBlock',
}
</script>

<style scoped>
button {
  background-color: #FFF0CB;
  height: 62px;
  width: calc(20% - 4 * 16px / 5);
  margin-bottom: 11px;
}

.wrapper-button {
  margin-top: 80px;
  width: 100%;
  padding: 21px 100px 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #fff;
}

.width-big {
  width: calc(80% - 3px);
}
</style>