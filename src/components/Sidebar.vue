<template>
  <div>
    <Brick class="item" title="Meteo" content="Sed posuere consectetur est at lobo"/>
    <Brick class="item" title="Meteo" content="Etiam porta sem malesuada magna mol"/>
    <Brick class="item" title="Meteo" content="Etiam porta sem mollis euismod."/>
    <Brick title="Meteo" content="Sem malesuada"/>
    <Brick title="Meteo" content="Mollis euismod."/>
    <Brick title="Meteo" content="Mollis."/>
  </div>
</template>

<script>
import Brick from '@/components/Brick.vue';

export default {
  name: 'Sidebar',
  components: {
    Brick,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
