<template>
    <div class="drop-container">
      
        <p class="container-add">
            +
        </p>
      <drop class="drop-zone">
      </drop>
    </div>
</template>

<script>
export default {
  name: 'Slot',
  props: {
    //title: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    $maingrey: rgb(151, 151, 151);
    .drop-container {
      width: 30%;
      margin: 1%;
      min-height: 300px;
      background-color: $maingrey;
    }
    .container-add {
      text-align: center;
      widows: 100%;
      font-family: helvetica;
      font-weight: 900;
      font-size: 20px;
      color: white;
    }
    .drop-zone{
      width: 100%;
      min-height: 200px;
      background-color: rgb(189, 189, 189);
    }
</style>
