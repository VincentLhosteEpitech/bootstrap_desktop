<template>
  <div>
    <drag>
      <div class="brickcontainer">
        <h2 class="brick-title">{{ title }}</h2>
        <p class="brick-content">{{ content }}</p>
      </div>
    </drag>
  </div>
</template>

<script>
export default {
  name: 'Brick',
  props: {
    title: String,
    content: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$mainbeige: #f7cc8b;
.brick-content{
    font-weight: bold;
    font-size: 1em;
    text-align: justify;
    background-color: $mainbeige;
}
.brick-title{
    background-color: $mainbeige;
    font-size: 15px;
}
.brickcontainer{
  padding: 10px;
  background-color: $mainbeige;
  margin-bottom: 10px;
}
</style>
