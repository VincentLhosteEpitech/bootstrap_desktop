import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
  key: 'widgets',
  storage: window.localStorage
})


Vue.use(Vuex);


const state = {
    bricks: [
        {posTop: "30", posLeft: "100", title: "Hey", content: "Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."},
        {posTop: "130", posLeft: "0", title: "Hey", content: "widget2"},
        {posTop: "230", posLeft: "0", title: "Hey", content: "Rss3"},
        {posTop: "330", posLeft: "0", title: "Hey", content: "Meteo4"},
        {posTop: "430", posLeft: "0", title: "Hey", content: "Binance5"},
        {posTop: "530", posLeft: "0", title: "Hey", content: "Toto6"}
    ],
    widgets: [
      {id: "1", marginT: "100", marginL: "100"}
    ]
}

const mutations = {
  changeObjectValue (state, { id, posL, posT }) {
    const found = state.widgets.find(item => item.id === id);
      console.log("instore :"+posL)
      console.log("instore :"+posT)
      found.marginL = posL;  
      found.marginT = posT;               
  },
}

const getters = {
    pinedBricks: state => {
      var pinedBricks = state.bricks.map( brick => {
        return {
          title: '**' + brick.title + '**',
          content: 'CONTENT' + brick.content,
        }
      })
      return pinedBricks
    },
}

const actions = {

}

const store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
  plugins: [vuexPersist.plugin]
});

global.store = store;

export default store;