import About from "./components/about.vue";
// import Contact from "./components/contact.vue";
// import Login from "./components/login.vue";
import Index from "./components/index.vue";

const routers = [
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/",
    name: "index",
    component: Index,
  },
];
export default routers;
