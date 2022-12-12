import Vue from 'vue';
import Vuex from 'vuex';
import inSideHouse from '@/store/modules/inSideHouse';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    inSideHouse,
  },
});
