// import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/js/bootstrap.js";
import router from "./router";

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

const app = createApp(App).use(router);
app.mount("#app");
