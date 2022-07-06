import { createStore, createLogger } from "vuex";
import userStore from "./modules/userStore";
import documentStore from "./modules/documentStore";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    userStore,
    documentStore,
  },
  // strict: debug,
  plugins: debug ? [createLogger()] : [],
});
