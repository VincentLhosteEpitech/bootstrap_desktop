<template>
  <div class="container">
      <Movables/>
  </div>
</template>

<script>
// @ is an alias to /src
import Movables from '@/components/Movables.vue';

export default {
  name: 'Home',
  components: {
    Movables,
  },
};
</script>
<style lang="scss">
  $mainbeige: #f7cc8b; 
  /*Pour voir l'effet du masonry*/
  .drop-container.item.item1 {
    height: 500px;
    border: 2px dotted black;
    background-color: $mainbeige; 
  }

</style>
