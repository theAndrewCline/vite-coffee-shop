import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Coffee from "./components/Coffee.vue";
import Coffees from "./components/Coffees.vue";

const routes = [
  { path: "/coffees", component: Coffees },
  { path: "/coffee/:title", component: Coffee },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

const app = createApp(App);

app.use(router);

app.mount("#app");
