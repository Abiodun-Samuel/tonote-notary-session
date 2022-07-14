const state = () => ({
  //returns true if notary is in the session
  notaryReady: false,
});

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  NOTARY_READY(state) {
    state.notaryReady = true;
  },
  NOTARY_NOT_READY(state) {
    state.notaryReady = false;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
