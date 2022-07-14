import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueToast from "vue-toast-notification";
import Vue3Signature from "vue3-signature";
import $ from "jquery";

import "bootstrap/dist/js/bootstrap.js";
import "aos/dist/aos.css";
import "vue-toast-notification/dist/theme-sugar.css";
import "../node_modules/nprogress/nprogress.css";

createApp(App)
  .use(router)
  .use(store)
  .use(VueToast)
  .use(Vue3Signature)
  .use($)
  .mount("#app");
