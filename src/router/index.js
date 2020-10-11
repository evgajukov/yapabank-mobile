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
    { path: "/", name: "Main", component: MainPage },
    { path: "/history", name: "History", component: HistoryPage },
    { path: "/contacts", name: "Contacts", component: ContactsPage },
    { path: "/about", name: "About", component: AboutPage },
    { path: "/settings", name: "Settings", component: SettingsPage },
    { path: "/signin", name: "Auth", component: AuthPage },
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
});