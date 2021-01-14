import Vue from 'vue';
import Vuex from 'vuex';
/*plugins*/
import { VueMasonryPlugin } from 'vue-masonry';
import { Drag, Drop } from 'vue-drag-drop';
import { InlineSvgPlugin } from 'vue-inline-svg';
import movable from "v-movable";
import Vuetify from 'vuetify'
Vue.use(Vuetify)
/*<plugins>*/
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(Vuex);

/*plugins*/
Vue.use(VueMasonryPlugin);
Vue.use(InlineSvgPlugin);
Vue.use(movable);
Vue.component('drag', Drag);
Vue.component('drop', Drop);
/*<plugins>*/

new Vue({
  router,
  store: store,
  Vuex,

  /*<plugins>*/
  VueMasonryPlugin,

  movable,
  Vuetify,
  InlineSvgPlugin,
  vuetify,

  /*<plugins>*/
  render: (h) => h(App)
}).$mount('#app');
