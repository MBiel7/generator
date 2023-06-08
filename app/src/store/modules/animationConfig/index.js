import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      selectedAnimationConfig: {},
      selectedValues:{}, // This is where the values from the form will be stored
    };
  },
  mutations,
  actions,
  getters
};
