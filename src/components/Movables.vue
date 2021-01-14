<template>
  <div>
        <div class="v-movable-li" v-for="single in bricks" v-bind:key="single">
          <movable ref="movable" class="movable" @complete="observeSingle(single)" v-bind:posTop="single.posTop" v-bind:posLeft="single.posLeft" :grid="1">
            <Brick class="item" v-bind:title="single.title" v-bind:content="single.content"/>
          </movable>
        </div>
  </div>
</template>

<script>
import Brick from '@/components/Brick.vue'

export default {
  name: 'Movables',
  components: {
    Brick,
  },
  props: {
  },
  computed:{
    bricks(){
      return this.$store.state.bricks
    },
    pinedBricks(){
      return this.$store.getters.pinedBricks
    }  
  },
  methods: {
    /*setPastel(){
      return "hsl(" + 360 * Math.random() + ',' +
                (25 + 70 * Math.random()) + '%,' + 
                (85 + 10 * Math.random()) + '%)'
    }*/
    observeSingle(single){
      //this.$store.commit('savePositions')
      //console.log(left);
      console.log(single)
      console.log('toto')
    },
    /*savePosition: function(){
      this.$store.state.bricks.forEach( brick => {
        console.log(brick.posTop);
      })
    }*/
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
#reorder-positions{
  top: 0;
  left: 0;
  position: fixed;
  background-color: black;
  color: white;
}
ul .v-movable-li{
  list-style-type: none;
  margin: 0px;
  padding: 0px;
}
</style>
