import axios from "axios";

const state = () => ({
  userDetails: "",
});

// getters
const getters = {};

// actions
const actions = {
  // async login() {},

  async getUserProfile(context) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.VUE_APP_USER_TOKEN}`,
        },
      };

      const response = await axios.get(
        `http://tonote-api.herokuapp.com/api/v1/user/profile`,
        config
      );
      context.commit("USER_DETAILS", response.data.data);
    } catch (error) {
      console.log(error);
    }
  },
};

// mutations
const mutations = {
  USER_DETAILS(state, payload) {
    state.userDetails = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
