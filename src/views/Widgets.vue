<template>
  <div class="container">
      <Widget idProp="1"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Widget from '@/components/Widget.vue';

export default {
  name: 'Widgets',
  data(){
    return{
    }
  },
  components: {
    Widget,
  },
};
</script>
<style lang="scss">
  $mainbeige: #f7cc8b; 
  

</style>