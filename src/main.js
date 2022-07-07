import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueToast from "vue-toast-notification";

import "bootstrap/dist/js/bootstrap.js";
import "aos/dist/aos.css";
import "vue-toast-notification/dist/theme-sugar.css";
import "../node_modules/nprogress/nprogress.css";

createApp(App).use(router).use(store).use(VueToast).mount("#app");
