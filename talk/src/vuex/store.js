import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    arr : []
}


const mutations = {
    setMessageList(state, status) {
      state.arr = status;
    }
  };

  const getters = {

};



  const actions = {
    setMessageList({
      commit
    }, status) {
      commit('setMessageList', status);
    }
  };

  export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
  });
  