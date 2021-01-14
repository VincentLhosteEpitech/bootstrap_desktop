<template>
 <div>
    <div v-for="singlewidget in widgets" v-bind:key="singlewidget">
        <div v-if="stateCount === true">
         <div id="hereami" ref="element" class="element" v-bind:style="{ fontSize: fontSize + 'px', marginLeft: singlewidget.marginL-this.adjusterLeft + 'px', marginTop: singlewidget.marginT-this.adjusterTop + 'px' }">
            <span ></span>
            <Moveable
                class="moveable"
                v-bind="moveable"
                @drag="handleDrag"
                @resize="handleResize"
                @scale="handleScale"
                @rotate="handleRotate"
                @warp="handleWarp"
                @pinch="handlePinch"
            >
                <!-- Moveable content -->
                <span>
                    Yolo<br/>
                    <button class="lockable" v-on:click="setMargins(idProp)"><v-icon>mdi-content-save</v-icon></button>
                </span>
            </Moveable>
         </div>
        </div>
        <div v-else>
          <div id="hereami" ref="element" class="element" v-bind:style="{ fontSize: fontSize + 'px', marginLeft: singlewidget.marginL + 'px', marginTop: singlewidget.marginT + 'px' }">
              <span ></span>
              <Moveable
                  class="moveable"
                  v-bind="moveable"
                  @drag="handleDrag"
                  @resize="handleResize"
                  @scale="handleScale"
                  @rotate="handleRotate"
                  @warp="handleWarp"
                  @pinch="handlePinch"
              >
                  <!-- Moveable content -->
                  <span>
                      Yolo<br/>
                      <button class="lockable" v-on:click="setMargins(idProp)"><v-icon>mdi-content-save</v-icon></button>
                  </span>
              </Moveable>
          </div>
        </div>      
    </div>
 </div>
</template>

<script>
// @ is an alias to /src
import Moveable from 'vue-moveable';

export default {
  name: 'Widget',
  components: {
    Moveable,
  },
  props:{
    idProp: String,
  },
  data: () => ({
    moveable: {
      draggable: true,
      throttleDrag: 0,
      resizable: false,
      throttleResize: 1,
      keepRatio: true,
      scalable: true,
      throttleScale: 0,
      rotatable: true,
      throttleRotate: 0,
      pinchable: true, // ["draggable", "resizable", "scalable", "rotatable"]
      origin: false,
      renderDirections: ["nw", "ne", "sw", "se"],
      marginLeft: 0,
      marginTop: 0,
      stateCount: false,
      adjusterLeft: 0,
      adjusterTop: 0
    },
    fontSize: 100,
    margins:{
        marginleft: Number,
        margintop: Number
    },
    defMargins:[],
    defCurrent:[]
  }),
  computed: {
        widgets(){
            return this.$store.state.widgets
        },
  },
  methods: {
    handleDrag({ target, transform }) {
      var matches = transform.substr(transform.indexOf("translate") + 9); // Contains 24 //
      var r = /-?\d+/g;
      var final = matches.match(r);
      let nb1=Number(final[0]); 
      let nb2=Number(final[final.length-1]);
      let watch = document.getElementById('hereami')  

      var style = watch.currentStyle || window.getComputedStyle(watch);
      var localwatchheight = style.marginTop;
      localwatchheight = Number(localwatchheight.substring(0, localwatchheight.length - 2));
      console.log(localwatchheight)

      var localwatchleft = style.marginLeft;
      localwatchleft = Number(localwatchleft.substring(0, localwatchleft.length - 2));
      console.log(localwatchleft)
      //let localwatchleft = watch.offsetLeft 
      //console.log(localwatchheight)
      //console.log(localwatchleft)
      this.defCurrent.push(localwatchleft,localwatchheight);
      this.defMargins.push(nb1, nb2);
      target.style.transform = transform;
    },
    handleResize({
      target, width, height, delta,
    }) {
      console.log('onResize', width, height);
      delta[0] && (target.style.width = `${width}px`);
      delta[1] && (target.style.height = `${height}px`);
    },
    handleScale({ target, transform, scale }) {
      console.log('onScale scale', scale);
      target.style.transform = transform;
    },
    handleRotate({ target, dist, transform }) {
      console.log('onRotate', dist);
      target.style.transform = transform;
    },
    handleWarp({ target, transform }) {
      console.log('onWarp', transform);
      target.style.transform = transform;
    },
    handlePinch({ target }) {
      console.log('onPinch', target);
    },
    setMargins(idhere){
        //console.log(this.marginLeft)
        //console.log(this.marginTop)
        let arr = this.defMargins
        let conversion = arr.slice(Math.max(arr.length - 2, 0))
        //console.log(conversion)

        let arr2 = this.defCurrent
        let conversion2 = arr2.slice(Math.max(arr2.length - 2, 0))

        //adjusters
        this.adjusterLeft = conversion[0]
        this.adjusterLeft = conversion[1]

        //console.log(conversion2[1])
        
        let conversionLeft = conversion2[0]+conversion[0]
        let conversionTop = conversion2[1]+conversion[1]
        //console.log(conversionLeft)
        //console.log(conversionTop)

        console.log(idhere)

        this.$store.commit('changeObjectValue', {id:idhere, posL: conversionLeft, posT: conversionTop});
        this.marginLeft = conversionLeft;
        this.marginTop = conversionTop;
        this.stateCount = true
        //console.log('onDrag left, top', transform);
        //console.log('typeof:::', typeof transform);
        //console.log(matches);
    }
  }
}
</script>
<style lang="scss">
  $mainbeige: #f7cc8b; 
  #sidebar {
    width:15%;
    float: left;
  }
  #grid {
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
  .moveable {
    display: inline-block;
  }
  button.lockable{
    background-color: transparent;
    border-style: none;
    color: white;
    font-size: 15px;
  }
  .hereami{
    display: block;
  }
  .v-list-item__subtitle {
    font-family: helvetica;
  }
</style>
