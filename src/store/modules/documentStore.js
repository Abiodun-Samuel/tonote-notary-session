const state = () => ({
  passport: null,
  isDisabled: true,
  show: false,
});

// getters
const getters = {};

// mutations
const mutations = {
  loadPassport(state, payload) {
    state.passport = payload;
    state.isDisabled = false;
  },
  unLoadPassport(state) {
    state.passport = JSON.parse(JSON.stringify(null));
    state.isDisabled = JSON.parse(JSON.stringify(true));
  },
  showPassport(state) {
    state.show = true;
  },
};

// actions
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
