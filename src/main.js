import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./css/main.css";

const app = createApp(App);
app.config.globalProperties.window = window;
app.use(store).use(router).mount("#app");
