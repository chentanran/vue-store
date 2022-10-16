import { createSSRApp } from "vue";
import App from "./App.vue";

export function createApp() {
  const app = createSSRApp(App);
  require('./common/request.js')(App)
  return {
    app,
  };
}
