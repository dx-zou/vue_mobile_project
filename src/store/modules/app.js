import { CHANGE_NAVCOLLAPSE } from "../mutation-types";
const state = {
  navCollapse: true // 首页导航折叠状态,默认折叠
};

const mutations = {
  [CHANGE_NAVCOLLAPSE]: state => {
    state.navCollapse = !state.navCollapse;
  }
};

const actions = {
  changeNavCollapse: ({ commit }) => {
    commit("CHANGE_NAVCOLLAPSE");
  }
};

export default {
  namespaced: false,
  state,
  mutations,
  actions
};
