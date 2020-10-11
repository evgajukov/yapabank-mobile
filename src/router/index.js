import Vue from "vue";
import Router from "vue-router";

import AuthPage from "@/pages/AuthPage";
import MainPage from "@/pages/MainPage";
import HistoryPage from "@/pages/HistoryPage";
import ContactsPage from "@/pages/ContactsPage";
import AboutPage from "@/pages/AboutPage";
import SettingsPage from "@/pages/SettingsPage";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "main", component: MainPage },
    { path: "/history", name: "history", component: HistoryPage },
    { path: "/contacts", name: "contacts", component: ContactsPage },
    { path: "/about", name: "about", component: AboutPage },
    { path: "/settings", name: "settings", component: SettingsPage },
    { path: "/signin", name: "auth", component: AuthPage },
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
});