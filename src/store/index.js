import { createStore, createLogger } from "vuex";
import SecureLS from "secure-ls";
import createPersistedState from "vuex-persistedstate";
import userStore from "./modules/userStore";
import documentStore from "./modules/documentStore";
import notarysessionStore from "./modules/notarysessionStore";

const ls = new SecureLS({ isCompression: true });
const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    userStore,
    documentStore,
    notarysessionStore,
  },

  // strict: debug,
  plugins: [
    debug ? createLogger() : [],
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});
