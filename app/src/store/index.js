import { createStore } from 'vuex';

import animationConfig from './modules/animationConfig/index.js';

const store = createStore({
  modules: {
    animationConfig: animationConfig,
  },
  state() {
    return {

    };
  },
});

export default store;