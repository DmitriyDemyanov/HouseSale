import Vue from 'vue';
import Vuex from 'vuex';
import inSideHouse from '@/store/modules/inSideHouse';
import catalogOfHouses from '@/store/modules/catalogOfHouses';
import footer from '@/store/modules/footer';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    inSideHouse,
    catalogOfHouses,
    footer,
  },
});
