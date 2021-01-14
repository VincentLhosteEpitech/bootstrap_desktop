<template>
  <div class="container">
    <div id="sidebar" class="sidebar">
      <Sidebar/>
    </div>
    <div id="masonrygrid" class="grid">
      <div v-masonry="containerId" class="home" item-selector=".item">
        <Slot v-masonry-tile class="item item1"/>
        <Slot v-masonry-tile class="item"/>
        <Slot v-masonry-tile class="item"/>
        <Slot v-masonry-tile class="item"/>
        <Slot v-masonry-tile class="item"/>
        <Slot v-masonry-tile class="item"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue';
import Slot from '@/components/Slot.vue';

export default {
  name: 'Settings',
  components: {
    Slot,
    Sidebar,
  },
};
</script>
<style lang="scss">
  $mainbeige: #f7cc8b; 
  #sidebar {
    width:15%;
    float: left;
  }
  #masonrygrid {
    width:83%;
    margin-left: 2%;
    float: right; 
  }
  /*Pour voir l'effet du masonry*/
  .drop-container.item.item1 {
    height: 500px;
    border: 2px dotted black;
    background-color: $mainbeige; 
  }
</style>
