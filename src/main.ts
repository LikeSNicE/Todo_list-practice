import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./routes/router";

// Локализация
import ru from './locales/ru.json';
import en from "./locales/en.json";
import { createI18n } from "vue-i18n";

const savedLanguage = localStorage.getItem("lang") || "ru";

const i18n = createI18n({
  locale: savedLanguage,
  fallbackLocale: "en",
  messages: {
    ru,
    en,
  },
  legacy: false, // нужно для Composition API
});


const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(i18n);
app.mount("#app");
