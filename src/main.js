import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/js/bootstrap.js";
import "vue-universal-modal/dist/index.css";
import VueUniversalModal from "vue-universal-modal";
import { Tabs, Tab } from "vue3-tabs-component";

// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.css";

// import Toast from "vue-toastification";
// import "vue-toastification/dist/index.css";

// const options = {
//   position: "top-center",
//   timeout: 2000,
//   closeOnClick: true,
//   pauseOnFocusLoss: true,
//   pauseOnHover: true,
//   draggable: true,
//   draggablePercent: 0.6,
//   showCloseButtonOnHover: false,
//   hideProgressBar: true,
//   closeButton: "button",
//   icon: true,
//   rtl: false,
//   transition: "Vue-Toastification__fade",
//   maxToasts: 20,
//   newestOnTop: true,
// };

const app = createApp(App)
  .use(router)
  .use(VueUniversalModal, {
    teleportTarget: "#modals",
    modalComponent: "Modal",
  })
  .component("tabs", Tabs)
  .component("tab", Tab);
app.mount("#app");
